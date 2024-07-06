const scores = [85, 90, 78, 92, 88];

function calculateAverage(scores) {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}

const averageScore = calculateAverage(scores);

document.getElementById('result').textContent = `The average score is: ${averageScore.toFixed(2)}`;
