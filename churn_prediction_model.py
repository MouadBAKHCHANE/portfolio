import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, roc_auc_score, classification_report, confusion_matrix
import matplotlib.pyplot as plt
import seaborn as sns

# --- 1. Load Data ---
# In a real production environment, this data comes from Snowflake.
# We provide a CSV fallback for portable demonstration purposes.

def load_from_snowflake():
    """
    Demonstration code for connecting to Snowflake.
    Requires: pip install snowflake-connector-python
    """
    import snowflake.connector
    
    conn = snowflake.connector.connect(
        user='YOUR_USER',
        password='YOUR_PASSWORD',
        account='YOUR_ACCOUNT',
        warehouse='COMPUTE_WH',
        database='TELCO_DB',
        schema='PUBLIC'
    )
    
    query = """
    SELECT * FROM TELCO_CHURN_GOLD
    WHERE IS_ACTIVE = TRUE
    """
    
    return pd.read_sql(query, conn)

FILE_NAME = 'Telco_Churn_Enrichi_GCP.csv'
try:
    # Toggle this in production:
    # df = load_from_snowflake()
    df = pd.read_csv(FILE_NAME)
    print(f"Loaded dataset: {FILE_NAME} under 'Snowflake Simulation Mode'")
    print(f"Shape: {df.shape}")
except FileNotFoundError:
    print(f"Error: {FILE_NAME} not found. Please run enrich_data.py first.")
    exit()

# --- 2. Preprocessing ---
print("\n--- Preprocessing ---")

# Handle missing values in TotalCharges (if any remain)
df['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce').fillna(0)

# Drop redundant or non-predictive columns
drop_cols = ['customerID', 'Cout_Acquisition_Client', 'Rentabilite_Nette_Simulee'] # These are outcome/simulated metrics, not input features
X = df.drop(columns=['Churn'] + drop_cols, errors='ignore')
y = df['Churn'].map({'Yes': 1, 'No': 0})

# Encode Categorical Variables
label_encoders = {}
for col in X.select_dtypes(include=['object']).columns:
    le = LabelEncoder()
    X[col] = le.fit_transform(X[col])
    label_encoders[col] = le

print("Categorical variables encoded.")

# Split Data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
print(f"Training set: {X_train.shape}, Test set: {X_test.shape}")

# --- 3. Model Training (XGBoost) ---
print("\n--- Training XGBoost Classifier ---")
model = xgb.XGBClassifier(
    objective='binary:logistic',
    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    eval_metric='logloss',
    use_label_encoder=False
)

model.fit(X_train, y_train)

# --- 4. Evaluation ---
print("\n--- Evaluation ---")
y_pred = model.predict(X_test)
y_prob = model.predict_proba(X_test)[:, 1]

acc = accuracy_score(y_test, y_pred)
roc_auc = roc_auc_score(y_test, y_prob)

print(f"Accuracy: {acc:.4f}")
print(f"ROC AUC: {roc_auc:.4f}")
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# --- 5. Business Impact Analysis (ROI) ---
print("\n--- Business Impact Analysis (Gold Standard) ---")

# Simulation Parameters
AVG_CLV = 2000 # Average Customer Lifetime Value in $ (Hypothesis)
RETENTION_COST = 200 # Cost to retain a flagged customer (Discount, Support, etc.)
SUCCESS_RATE = 0.5 # Success rate of retention campaign on correctly flagged churners

# Confusion Matrix to get precise counts
cm = confusion_matrix(y_test, y_pred)
tn, fp, fn, tp = cm.ravel()

# Calculated Metrics
customers_saved = tp * SUCCESS_RATE # We only save True Positives (Actual Churners we caught)
revenue_saved = customers_saved * AVG_CLV
campaign_cost = (tp + fp) * RETENTION_COST # We pay for everyone we flagged (True Positives + False Positives)
net_roi = revenue_saved - campaign_cost

print(f"Test Set Size: {len(y_test)} customers")
print(f"Detected Churners (True Positives): {tp}")
print(f"False Alarms (False Positives): {fp}")
print("-" * 30)
print(f"Projected Revenue Saved: ${revenue_saved:,.0f}")
print(f"Retention Campaign Cost: ${campaign_cost:,.0f}")
print(f"NET RETURN ON INVESTMENT: ${net_roi:,.0f}")

# --- 6. Feature Importance ---
print("\n--- Top 5 Features Driving Churn ---")
importance = pd.DataFrame({
    'Feature': X.columns,
    'Importance': model.feature_importances_
}).sort_values(by='Importance', ascending=False)

print(importance.head(5))

# --- 7. Visualization ---
print("\n--- Generating Visualizations ---")

# Feature Importance Plot
plt.figure(figsize=(10, 6))
sns.barplot(x='Importance', y='Feature', data=importance.head(10), palette='viridis')
plt.title('Top 10 Drivers of Customer Churn (XGBoost)')
plt.xlabel('Importance Score')
plt.ylabel('Feature')
plt.tight_layout()
plt.savefig('churn_feature_importance.png')
print("Saved: churn_feature_importance.png")

# Confusion Matrix Plot
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', cbar=False,
            xticklabels=['Retained', 'Churned'],
            yticklabels=['Retained', 'Churned'])
plt.title('Confusion Matrix - Retention Campaign Targeting')
plt.xlabel('Predicted by Model')
plt.ylabel('Actual Status')
plt.tight_layout()
plt.savefig('churn_confusion_matrix.png')
print("Saved: churn_confusion_matrix.png")

print("\nAnalysis Complete. Model is ready for deployment.")
