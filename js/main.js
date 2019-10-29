var spinner = document.getElementById('overlay');
window.addEventListener('load', function()
{
     spinner.style.display = 'none';
})

const sendEmail = (e) => {
     e.preventDefault();
     Email.send({
          SecureToken : "e3e2e35e-62ca-48c2-9e1c-0cca6408cbf1",
          To : 'umar.ngare@gmail.com, uomarearlie7@gmail.com',
          From : $('#fro').val(),
          Subject : $('#subj').val(),
          Body : $('#bod').val()
      }).then(
        message => alert(`Sent`)
      );
}