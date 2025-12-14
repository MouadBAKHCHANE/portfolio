import pandas as pd
import numpy as np
import io

# Définition du nom du fichier
FILE_NAME = 'WA_Fn-UseC_-Telco-Customer-Churn.csv'
OUTPUT_FILE_NAME = 'Telco_Churn_Enrichi_GCP.csv'

# --- 2. Chargement du dataset initial ---
try:
    # Charger le fichier tel que nommé
    df = pd.read_csv(FILE_NAME)
    print(f"Chargement réussi du fichier : {FILE_NAME}")

    # Nettoyage initial nécessaire pour ce dataset spécifique:
    # 'TotalCharges' contient des espaces (' ') pour les nouveaux clients, ce qui bloque la conversion.
    df['TotalCharges'] = df['TotalCharges'].replace(' ', np.nan)
    df['TotalCharges'] = pd.to_numeric(df['TotalCharges'])
    
    # Remplacer les valeurs manquantes par 0 (ou la moyenne, mais 0 est plus simple pour les nouveaux clients)
    df['TotalCharges'] = df['TotalCharges'].fillna(0)
    
except FileNotFoundError:
    print(f"Erreur : Le fichier {FILE_NAME} n'a pas été trouvé. Veuillez vérifier qu'il est dans le même dossier.")
    exit()

# --- 3. Ingénierie Analytique 2025 (Features de Valeur) ---

# A. Simulation du Coût d'Acquisition Client (CAC)
# Le CAC est simulé proportionnellement au coût mensuel pour être plus réaliste.
# 'MonthlyCharges' est le proxy de la valeur client mensuelle.
# np.random.uniform(5, 10) introduit une variabilité (chaque client a un CAC légèrement différent).
df['Cout_Acquisition_Client'] = df['MonthlyCharges'] * np.random.uniform(5, 10, size=len(df))

# Nouvelle Feature: Rentabilité Nette (simulée)
# KPI clé pour la prise de décision en 2025/2026
df['Rentabilite_Nette_Simulee'] = df['TotalCharges'] - df['Cout_Acquisition_Client']

# B. Simulation du Score de Sentiment Client (Analyse d'Interaction IA)
# La distribution est ajustée pour que le sentiment soit plus négatif pour les clients qui ont churné.

# Générer des scores aléatoires initiaux (entre -0.5 et 1.0)
sentiment_scores = np.random.uniform(-0.5, 1.0, size=len(df))

# Masque pour identifier les clients qui ont churné ('Yes')
churn_mask = df['Churn'] == 'Yes'

# Réduire le score de sentiment pour les Churners (pour rendre la variable prédictive)
sentiment_scores[churn_mask] = sentiment_scores[churn_mask] - np.random.uniform(0.3, 0.6, size=churn_mask.sum())

# S'assurer que les scores restent dans la plage [-1, 1] et les arrondir
df['Score_Sentiment_Dernier_Mois'] = np.clip(sentiment_scores.round(2), -1.0, 1.0)

# --- 4. Sortie pour l'Ingestion GCP (BigQuery) ---

# Afficher les nouvelles colonnes pour vérification
print("\n--- Aperçu des nouvelles Features 2025/2026 (Prêt pour BigQuery) ---")
print(df[['customerID', 'TotalCharges', 'MonthlyCharges', 'Cout_Acquisition_Client', 'Score_Sentiment_Dernier_Mois', 'Rentabilite_Nette_Simulee', 'Churn']].head())

# Sauvegarde du nouveau fichier CSV enrichi
df.to_csv(OUTPUT_FILE_NAME, index=False)
print(f"\nFichier enrichi sauvegardé : {OUTPUT_FILE_NAME}")
