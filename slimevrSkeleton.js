const canvas = document.getElementById("skeletonCanvas");

let head = 10
let neck = 10;
let torso = 56;
let chest = 30;
let waist = 4;
let hipsWidth = 26;
let legs = 90;
let knees = 50;

let controllerY = 5, controllerZ = 15, elbowDistance = 24;

let currentX = canvas.width/2, currentY = 10;

const scale = 3;
const width = 8;

updateSkeleton();

function updateSkeleton(){
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        // Head and spine
        drawLine(ctx, [currentX + head * scale, currentY], [currentX, currentY], 'purple', width);
        drawLine(ctx, [currentX, currentY], [currentX, currentY + neck * scale], 'purple', width);
        drawLine(ctx, [currentX, currentY], [currentX, currentY + chest * scale], 'purple', width);
        drawLine(ctx, [currentX, currentY], [currentX, currentY + (torso - waist - chest) * scale], 'purple', width);
        drawLine(ctx, [currentX, currentY], [currentX, currentY + waist * scale], 'purple', width);

        // Hips
        drawLine(ctx, [currentX, currentY], [currentX + hipsWidth/2 * scale, currentY], 'purple', width);
        drawLine(ctx, [currentX - hipsWidth/2 * scale, currentY], [currentX - hipsWidth * scale, currentY], 'purple', width);

        // Right leg
        drawLine(ctx, [currentX + hipsWidth * scale, currentY], [currentX + hipsWidth * scale, currentY + (legs - knees) * scale], 'purple', width);
        drawLine(ctx, [currentX, currentY], [currentX, currentY + knees * scale], 'purple', width);

        // Left leg
        drawLine(ctx, [currentX - hipsWidth * scale, currentY - legs * scale], [currentX - hipsWidth * scale, currentY - knees * scale], 'purple', width);
        drawLine(ctx, [currentX, currentY], [currentX, currentY + knees * scale], 'purple', width);
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