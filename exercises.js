document.onmousemove = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var circle = document.getElementById('circle');
    circle.animate({
        top: `${y}px`,
        left: `${x}px`
    }, { duration: 200, fill: 'forwards' })
}

async function main() {
    const exercisesDiv = document.getElementById('exercises');
    
    const exercises = await fetch('exercises.json').then(res => res.json());
    exercises.forEach(exercise => {
        var button = document.createElement('button');
        button.innerHTML = exercise.name;
        button.className = 'exercise';
        button.onclick = function() {
            window.location.href = `${exercise.file}`;
        }
        exercisesDiv.appendChild(button);
    });
    const circle = document.createElement('div');
    circle.id = 'circle';
    exercisesDiv.appendChild(circle);
}

main();