# BÀI TẬP 1
# Cài đặt mạng Neuron gồm 2 đầu vào ( giá trị của chiều dài và chiều rộng), 2 đầu ra ( màu hoa Đỏ hoặc Xanh ) 
# 1.1 Dùng ngôn ngữ Python thiết lập đầu vao theo công thức 
# y( dự đoán) = (m1 * w1 + m2 * w2 + bias)

import numpy as np

def NN(m1, w1, m2, w2, bias):
    z = m1 * w1 + m2 * w2 + bias
    return (z)

w1 = np.random.randn()
w2 = np.random.randn()
bias = np.random.randn()

print(NN(3,1.5,w1,w2,bias))
print(NN(2,1,w1,w2,bias))
print(NN(4,1.5,w1,w2,bias))