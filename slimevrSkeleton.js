const canvas = document.getElementById("skeletonCanvas");
const inputs = document.getElementsByClassName(".numberInput");

// head, neck, torso, chest, waist, hips width, legs, knees
let lengths = [10, 10, 56, 30, 4, 26, 90, 50];
const lenghtInputs = document.getElementsByClassName("numberInput");

let currentX, currentY;

const scale = 3;
const width = 8;

updateSkeleton();

for(let i = 0; i<lenghtInputs.length; i++){
    lenghtInputs[i].value = lengths[i];
    lenghtInputs[i].onchange = function(){
        lengths[i] = lenghtInputs[i].value;
        updateSkeleton();
    }
}

function updateSkeleton(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        currentX = canvas.width/2;
        currentY = 50;


        // Head and spine
        drawCircle(ctx, [currentX + lengths[0] * scale, currentY], 2, 'purple');
        drawLine(ctx, [currentX + lengths[0] * scale, currentY], [currentX, currentY], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');
        drawLine(ctx, [currentX, currentY], [currentX, currentY + lengths[1] * scale], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');
        drawLine(ctx, [currentX, currentY], [currentX, currentY + lengths[3] * scale], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');
        drawLine(ctx, [currentX, currentY], [currentX, currentY + (lengths[2] - lengths[4] - lengths[3]) * scale], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');
        drawLine(ctx, [currentX, currentY], [currentX, currentY + lengths[4] * scale], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');

        // Hips
        drawLine(ctx, [currentX, currentY], [currentX + lengths[5]/2 * scale, currentY], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');
        drawLine(ctx, [currentX - lengths[5]/2 * scale, currentY], [currentX - lengths[5] * scale, currentY], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');

        // Right leg
        drawLine(ctx, [currentX + lengths[5] * scale, currentY], [currentX + lengths[5] * scale, currentY + (lengths[6] - lengths[7]) * scale], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');
        drawLine(ctx, [currentX, currentY], [currentX, currentY + lengths[7] * scale], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');

        // Left leg
        drawLine(ctx, [currentX - lengths[5] * scale, currentY - lengths[6] * scale], [currentX - lengths[5] * scale, currentY - lengths[7] * scale], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');
        drawLine(ctx, [currentX, currentY], [currentX, currentY + lengths[7] * scale], 'purple', width);
        drawCircle(ctx, [currentX, currentY], 2.5, 'purple');
    }
}
function drawLine(ctx, begin, end, stroke, width) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }
    if (width) {
        ctx.lineWidth = width;
    }
    ctx.lineCap = "round";
    currentX = end[0];
    currentY = end[1];
    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}
function drawCircle(ctx, begin, radius, stroke) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }
    if (width) {
        ctx.lineWidth = width;
    }
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(begin[0], begin[1], radius, 0, 2 * Math.PI);
    ctx.stroke();
}