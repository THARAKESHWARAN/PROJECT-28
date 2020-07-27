function detectCollision(bodyA, bodyB){
	bodyAp = bodyA.body.position;
	bodyBp = bodyB.body.position;

	var distance = dist(bodyAp.x, bodyAp.y, bodyBp.x, bodyBp.y);

	if(distance<=bodyA.body.circleRadius+bodyB.body.circleRadius){
		Matter.Body.setStatic(bodyB.body, false);
	}
}