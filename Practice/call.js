function two(name)
{
    this.name = name;
}

function one(name, password)
{
    two.call(this, name);

    this.password = password;
}

const obj1 = new one('Khusham', 'Pass');
console.log(obj1);