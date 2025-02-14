const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const messageDiv = document.getElementById("message");

yesButton.addEventListener("click", () => {
  messageDiv.innerHTML = `
    <p>You said YES! 🥰 Here's something special for you:</p>
    <img src="https://media.giphy.com/media/10UeedrT5MIfPG/giphy.gif?cid=790b7611zxx57iyxy9at6mqaxlvt3zf6pk8nv0qotz1mvk5s&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Happy Valentine">
    <p>
      My love Gunjan, 💖
    </p>
    <p>
      Thanks for making me feel special with love and kindness.You have taught me how beautiful it is to cherised by someone.
      Thanks for giving me entry in ur life and feeling me worthy of ur feelings.
    </p>
    <p>
      You have never failed to make me feel special with all those efforts and those first steps which which make u special and unique.Your love and attention mean a lot to me.
    </p>
    <p>
      On this day I want u to know tat since past few months u have been the world to me.U mean a lot to me. Every day I crave for the special moments I spend with u.
      I would try my best to be the person worthy of u feelings.
      Atlast I want to apologize for every wrong I have done to u.
    <p>
      Deeply in love yours, <br>
      Gopi bau urf Darshan 💕
    </p>
  `;
});

  

noButton.addEventListener("click", () => {
  noButton.style.width = `${Math.max(50, noButton.offsetWidth - 10)}px`;
  yesButton.style.width = `${yesButton.offsetWidth + 10}px`;
  messageDiv.innerHTML = `
    <p>Oh no! 😢 Please reconsider and say yes!</p>
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGRybGQ5aTFob2liZ2Qxd21sbnFidHlydGljaDJlMnR0dGZ4cnh0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XKvNduSwo0nEXsjZAg/giphy.gif" alt="Sad Gif">
  `;
});
