



let sumOfEvens = (n) => {
    n = Number(prompt("Enter a number"));

    if (isNaN(n) || n<1) {
        alert("Please enter a valid number")
        document.write("Please enter a valid number")
        return;
    }
    let sum = 0;
    for (let i = 0; i <= n; i += 2) {
        sum += i;
    }
    console.log(`The sum of even numbers upto ${n} is ${sum}`);
    alert(`The sum of even numbers upto ${n} is ${sum}`);
    document.write(`The sum of even numbers upto ${n} is ${sum}`);

    return sum;
}

sumOfEvens()