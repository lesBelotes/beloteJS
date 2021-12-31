// crée une tableau vide  avec nom produits en ligne 3

let produits=[];
let produitsenligne3=new Array();

// crée un un object prod1 et prod2 : qui contient 3 attributs  id , nom , prix
let prod1={id:1,nom:'créme main',prix:145};
let prod2={id:2,nom:'créme pied',prix:90};


// ajouter les des produits (prod1, prod2) dans la table produits 
    
  produits=[prod1,prod2];//initialisation avec valeur prod1 et prod2

  produits.push(prod1);// ajouteur des elemnts dans un tableau avc push
    produits.push(prod2);
// cree une fonction qui prend en paramettre un tableau produit et affiche les noms et prix  de des produits

let afficheproduct=function(produits){
  for(var i=0;i<produits.length;i++)
     console.log("nom du produit "+produits[i].nom+""+"prix"+produits[i].prix);

}




// faire appel à la fonction qui est precedement crée 
  afficheproduct(produits);


// crée une fonction qui prends en paramettre un object produit et qui renvoie le meme objet apres avoir multiplié son prix par deux
// faire appel à cette fonction et affiche le resultat

function multipleprice(prod){
        prod.prix=(prod.prix)*2;
       return prod;

}
        var reponse=multipleprice(prod1);
        console.log(reponse);


