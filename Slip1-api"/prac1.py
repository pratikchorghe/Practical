import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

data = pd.read_csv('iris.csv')
print(data)

x = data["SepalLengthCm"]
y = data["SepalWidthCm"]
print(x)
print(y)

plt.scatter(x, y, c="red")
plt.xlabel("SepalLengthCm")
plt.ylabel("SepalWidthCm")
plt.show()
