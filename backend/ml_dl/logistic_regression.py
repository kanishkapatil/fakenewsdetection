from sklearn.linear_model import LogisticRegression

def train_logistic_regression(X, y):
    model = LogisticRegression()
    model.fit(X, y)
    return model

def predict_logistic(model, X):
    return model.predict(X)
