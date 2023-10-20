#Thực hiện vẽ sơ đồ của hàm kích hoạt Sigmoid(n)

import numpy as np
import matplotlib.pyplot as mt

x = np.linspace(-10, 10, 100)
z = 1/(1 + np.exp(-x))

mt.plot(x,z)
mt.xlabel("x")
mt.ylabel("Sigmoid(X)")

mt.show()