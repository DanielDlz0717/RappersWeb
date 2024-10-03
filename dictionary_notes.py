student1 = {
    "name": "Alex"
    "birthday": "january 1, 2010"
    "grade": 9
}

print(student1)
print(student1["name"])
if student1["name"] == "Daniel":
    print("we have the same name")
else:
    print("hi" + student1["name"])
    
#change the value of their grade 
student1["grade"] = 10
print(student1)