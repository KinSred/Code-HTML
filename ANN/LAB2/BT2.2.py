import numpy as np

def NN(m1, w1, m2, w2, bias):
    z = m1 * w1 + m2 * w2 + bias
    return sigmoid(z)

def sigmoid(x):
    return 1 / ( 1 - np.exp(-x))

w1 = np.random.randn()
w2 = np.random.randn()
bias = np.random.randn()

print(NN(3,1.5,w1,w2,bias))