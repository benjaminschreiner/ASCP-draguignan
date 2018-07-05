function inscription(arg){

	var aside=document.getElementById("connexion");
	if(arg==1){
	aside.innerHTML='<form method="post" ><h1>Formulaire d\'inscription</h1>        <p>            <label for="pseudo">Identifiant</label> :            <input type="text" placeholder ="Identifiant" name="pseudo" id="pseudo" required>            <span id="aidePseudo"></span>        </p>        <p>            <label for="mdp">Mot de passe</label> :            <input type="password" placeholder="Mot de passe" id="password" required>            <span id="aideMdp"></span>        </p>        <p>            <label for="mdp">Confirme Mot de passe</label> :            <input type="password" placeholder="Confirme Mot de passe" id="confirm_password" required>          <span id="aideMdp"></span>        </p>      <p>            <label for="courriel">Courriel</label> :            <input type="email" name="courriel" id="courriel" required placeholder="utilisateur@domaine.fr">            <span id="aideCourriel"></span>        </p> <p>            <label for="Date">Date de naissance</label> :            <input type="date" required>                </p>          <p><label for="sexe">Sexe</label><br /><select name="sexe" id="sex"><option value="homme">Homme</option><option value="femme">Femme</option></select></p>       <p><label for="sang">Groupe sanguin</label><br /><select name="sang" id="sang"> <option value="a+">A+</option> <option value="a-">A-</option> <option value="b+">B+</option><option value="b-">B-</option><option value="ab+">AB+</option><option value="ab-">AB-</option><option value="o+">O+</option><option value="o-">O-</option></select></p>       <p>Donneur ou Receveur :<br /> <input type="radio" name="donneur/receveur" id="donneur" /> <label for="donneur">Donneur</label><br /><input type="radio" name="donneur/receveur" id="receveur" /> <label for="receveur">Receveur</label><br /><input type="radio" name="donneur/receveur" id="donneur/receveur" /> <label for="donneur/receveur">Donneur/Receveur</label><br /></p>		<input type="submit" value="ENVOYER" class="bouton_co" onclick="validatePassword()"/>  <input type="submit" value="ANNULER" class="bouton_co" onclick="inscription(0)"/></form>';
	}
	else{
		aside.innerHTML='<h1>Connexion</h1><img src="image/bulle.png" alt="" id="fleche_bulle" /><p id="photo_zozor"><img src="image/greffe_organe.jpg" alt="Photo de Zozor" /></p><form method="post" action="traitement.php"><p><label for="pseudo">Identifiant :</label><input type="text" name="pseudo" id="pseudo"required /><br /><label for="pass">Mot de passe :</label><input type="password" name="pass" id="pass"required /><input type="submit" value="CONNEXION" class="bouton_co"/></p></form><input type="submit" value="INSCRIPTION" class="bouton_co" onclick="inscription(1)"/> <p><img src="image/facebook.png" alt="Facebook" /><img src="image/twitter.png" alt="Twitter" /><img src="image/vimeo.png" alt="Vimeo" /><img src="image/flickr.png" alt="Flickr" /><img src="image/rss.png" alt="RSS" /></p>'}

}



function validatePassword(){
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Mot de passe erroné !");
  } else {
    confirm_password.setCustomValidity('');
  }
}
