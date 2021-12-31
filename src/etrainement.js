// 1. declare une class Livre .  Avec son constructeur, initialize 2 attributs ,  titre , auteur
// 2. cree une fonction show qui affiche le titre et nom d'auteur

class Livre{
 titre;
auteur;
constructor(titre,auteur){
this.titre=titre;
this.auteur=auteur;

}


    show(){

console.log(this.titre+" "+this.auteur);
 

} 

}





//3. cree une instance de de type Livre , avec les argument titre = les mesirable , auteur ="victor Higo"
//4. faire appel à la fonction  show

var book=new Livre("les mesirable","victor Higo");
      book.show();

//5. cree une autre instance de type Livre
var booking=new Livre("la boite à merveille","ahmed sefroui");

booking.show();
//6. cree une tableau  biblio  qui contient les deux livre créent precedemment.

let biblio=[book,booking];


//7. affiche le contenu de chaque livre dans la biblio

for(var i=0;i<biblio.length;i++){

console.log(biblio[i]);


}


//8. cree la class Etudiant , avec attribut nom  à initilizer avec le contructeur
// cette class contient la fonction "lire"  qui prend en paramettre un livre  et affiche son nom
// la class contient auusi l'attribut nombreLivreLue qui s'increment apres chaque lecture

class Etudiant  {
nom;
nombreLivreLue=0;
constructor(nom){
    this.nom=nom;

}

     lire(livre){
        this.nombreLivreLue++;
       console.log(this.nom+" lise"+" "+livre.titre+" "+"nombre"+" "+this.nombreLivreLue);
     

     }
          
    }


//cree un etudiant et qui va lire 2 livre
 var e=new Etudiant("jamal");
   e.lire(book);
   e.lire(booking);
// affiche le nom et le nombre de livre créent

console.log("le nom"+" "+e.nom+" "+e.nombreLivreLue);