import random
import csv

file_name = 'ds2.csv'

# number of nodes
N_A = 1000
N_B = 900
N_C = 1000

# number of ABA and ABB connections
N_ABA = 200
N_ABB = 100

connections = []
# connections = [
#     ("A0", "B0", "C0"),
#     ("A4", "B3", "C1")
# ]

for i_A in range(N_A):
    i_B = random.randint(0, N_B - 1)
    i_C = random.randint(0, N_C - 1)
    connections.append((f'A{i_A}',f'B{i_B}',f'C{i_C}'))

for i_A in range(N_ABA):
    i_B = random.randint(0, N_B - 1)
    i_A2 = random.randint(0, N_A - 1)
    connections.append((f'A{i_A}',f'B{i_B}',f'A{i_A2}'))

for i_A in range(N_ABA):
    i_B = random.randint(0, N_B - 1)
    i_B2 = random.randint(0, N_B - 1)
    connections.append((f'A{i_A}',f'B{i_B}',f'B{i_B2}'))

with open(file_name, 'w', newline='') as f:
    writer = csv.writer(f)
    for c in connections:
        writer.writerow(c)