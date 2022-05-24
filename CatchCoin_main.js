 /******************************************************************************
      * definition
      ******************************************************************************/
// import Web3 object to interact with wallet provider
// for testing the truffle develop provider is used -> Port 9545
// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

// to interact with metamask change provider to currentProvider
      const WIDTH=1e3,HEIGHT=750,GAME_TIME=60;var keys,knight,crates,background,coinTimer,coins,scoreText,timeLeftText,timeLeftTimer,score=0,secondsLeft=60,gameOver=!1,coinsSent=!1,config={width:WIDTH,height:HEIGHT,type:Phaser.AUTO,scene:{preload:gamePreload,create:gameCreate,update:gameUpdate},physics:{default:"arcade",arcade:{gravity:{y:3e3},debug:!1}}};function gamePreload(){this.load.image("knight","assets/knight.png"),this.load.image("crate","assets/crate.png"),this.load.image("background","assets/background.png"),this.load.image("bitcoin","assets/bitcoin.png"),this.load.image("run_frame_1","assets/knight/run/Run (1).png"),this.load.image("run_frame_2","assets/knight/run/Run (2).png"),this.load.image("run_frame_3","assets/knight/run/Run (3).png"),this.load.image("run_frame_4","assets/knight/run/Run (4).png"),this.load.image("run_frame_5","assets/knight/run/Run (5).png"),this.load.image("run_frame_6","assets/knight/run/Run (6).png"),this.load.image("run_frame_7","assets/knight/run/Run (7).png"),this.load.image("run_frame_8","assets/knight/run/Run (8).png"),this.load.image("run_frame_9","assets/knight/run/Run (9).png"),this.load.image("run_frame_10","assets/knight/run/Run (10).png"),this.load.image("idle_frame_1","assets/knight/idle/Idle (1).png"),this.load.image("idle_frame_2","assets/knight/idle/Idle (2).png"),this.load.image("idle_frame_3","assets/knight/idle/Idle (3).png"),this.load.image("idle_frame_4","assets/knight/idle/Idle (4).png"),this.load.image("idle_frame_5","assets/knight/idle/Idle (5).png"),this.load.image("idle_frame_6","assets/knight/idle/Idle (6).png"),this.load.image("idle_frame_7","assets/knight/idle/Idle (7).png"),this.load.image("idle_frame_8","assets/knight/idle/Idle (8).png"),this.load.image("idle_frame_9","assets/knight/idle/Idle (9).png"),this.load.image("idle_frame_10","assets/knight/idle/Idle (10).png")}function gameCreate(){this.add.image(WIDTH/2,HEIGHT/2,"background"),(knight=this.physics.add.sprite(50,100,"knight")).body.setSize(400,600,10,0),knight.scaleX=.15,knight.scaleY=knight.scaleX,this.anims.create({key:"knight_run",frames:[{key:"run_frame_1"},{key:"run_frame_2"},{key:"run_frame_3"},{key:"run_frame_4"},{key:"run_frame_5"},{key:"run_frame_6"},{key:"run_frame_7"},{key:"run_frame_8"},{key:"run_frame_9"},{key:"run_frame_10"}],frameRate:10,repeat:1}),this.anims.create({key:"knight_idle",frames:[{key:"idle_frame_1"},{key:"idle_frame_2"},{key:"idle_frame_3"},{key:"idle_frame_4"},{key:"idle_frame_5"},{key:"idle_frame_6"},{key:"idle_frame_7"},{key:"idle_frame_8"},{key:"idle_frame_9"},{key:"idle_frame_10"}],frameRate:10,repeat:1}),crates=this.physics.add.staticGroup();for(var e=-160;e<=WIDTH+160;)crates.create(e,710,"crate"),e+=80;crates.create(140,560,"crate"),crates.create(130,170,"crate"),crates.create(300,450,"crate"),crates.create(300,200,"crate"),crates.create(500,250,"crate"),crates.create(600,400,"crate"),crates.create(600,100,"crate"),crates.create(750,250,"crate"),crates.create(900,170,"crate"),crates.create(700,540,"crate"),this.physics.add.collider(crates,knight),keys=this.input.keyboard.createCursorKeys(),coinTimer=this.time.addEvent({delay:Phaser.Math.Between(400,3e3),callback:generateCoins,callbackScope:this,repeat:-1}),timeLeftTimer=this.time.addEvent({delay:1e3,callback:updateTimeLeft,callbackScope:this,repeat:-1}),scoreText=this.add.text(16,16,"TdogMiner TDR = 0",{fontSize:"32px",fill:"#000"}),timeLeftText=this.add.text(16,56,secondsLeft+" seconds left",{fontSize:"32px",fill:"#f00"})}function gameUpdate(){gameOver||(keys.left.isDown?(keys.shift.isDown?knight.setVelocityX(-600):knight.setVelocityX(-300),knight.play("knight_run",!0),knight.flipX=!0):keys.right.isDown?(keys.shift.isDown?knight.setVelocityX(600):knight.setVelocityX(300),knight.play("knight_run",!0),knight.flipX=!1):(knight.setVelocityX(0),knight.play("knight_idle",!0)),(keys.up.isDown||keys.space.isDown)&&knight.body.touching.down&&knight.setVelocityY(-1200))}function generateCoins(){(coins=this.physics.add.group({key:"bitcoin",repeat:1,setXY:{x:Phaser.Math.Between(0,WIDTH),y:-100,stepX:Phaser.Math.Between(30,WIDTH/3)}})).children.iterate(function(e){e.setBounceY(Phaser.Math.FloatBetween(.3,1.2))}),this.physics.add.collider(coins,crates),this.physics.add.overlap(knight,coins,collectCoin,null,this)}function collectCoin(e,t){console.log("collectCoin"),t.disableBody(!0,!0),score++,scoreText.setText("TdogMiner TDR = "+score)}function updateTimeLeft(){gameOver?coinsSent||(mintAfterGame(score),coinsSent=!0):(secondsLeft--,timeLeftText.setText(secondsLeft+" seconds left"),secondsLeft<=0&&(this.physics.pause(),gameOver=!0))}var game=new Phaser.Game(config);
