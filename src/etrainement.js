// 1. declare une class Livre .  Avec son constructeur, initialize 2 attributs ,  titre , auteur
// 2. cree une fonction show qui affiche le titre et nom d'auteur

class Livre{
 titre;
auteur;
constructor(titre,auteur){
this.titre=titre;
this.auteur=auteur;

}


    Show(){

console.log(this.titre+" "+this.auteur);
 console.log(Livre.titre+" "+Livre.auteur);

} 

}





//3. cree une instance de de type Livre , avec les argument titre = les mesirable , auteur ="victor Higo"
//4. faire appel à la fonction  show

var book=new Livre("les mesirable","victor Higo");


//5. cree une autre instance de type Livre



//6. cree une tableau  biblio  qui contient les deux livre créent precedemment.



//7. affiche le contenu de chaque livre dans la biblio

