import csv
import random

# Define the proportions and total dataset size
abc_proportion = 0.8
aba_proportion = 0.1
abb_proportion = 0.1
total_dataset_size = 1000

# Calculate the number of lines for each type
abc_count = int(total_dataset_size * abc_proportion)
aba_count = int(total_dataset_size * aba_proportion)
abb_count = int(total_dataset_size * abb_proportion)

# Define the patterns
def generate_abc_pattern():
    return ["A" + str(random.randint(1, 100)), "B" + str(random.randint(1, 100)), "C" + str(random.randint(1, 100))]

def generate_aba_pattern():
    num = random.randint(1, 100)
    return ["A" + str(num), "B" + str(random.randint(1, 100)), "A" + str(num)]

def generate_abb_pattern():
    num = random.randint(1, 100)
    return ["A" + str(num), "B" + str(random.randint(1, 100)), "B" + str(random.randint(1, 100))]

# Generate unique lines for each type
lines = []
lines.extend([generate_abc_pattern() for _ in range(abc_count)])
lines.extend([generate_aba_pattern() for _ in range(aba_count)])
lines.extend([generate_abb_pattern() for _ in range(abb_count)])

# Shuffle the lines
random.shuffle(lines)

# Write dataset to CSV file
with open("generated_dataset.csv", "w", newline='') as csvfile:
    writer = csv.writer(csvfile)
    for line in lines:
        writer.writerow(line)
