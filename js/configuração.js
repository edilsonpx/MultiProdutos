/*
const firebaseConfig = {
  apiKey: "AIzaSyA20VD5hbnAUF0n0i5PVvXWuSvSxq0WTvo",
  authDomain: "lali-acessorios-98d44.firebaseapp.com",
  projectId: "lali-acessorios-98d44",
  storageBucket: "lali-acessorios-98d44.appspot.com",
  messagingSenderId: "556954457956",
  appId: "1:556954457956:web:4f41def5b02968ea4b8c71",
  measurementId: "G-QFFQP8SKX1"
};
*/

/*
const firebaseConfig = {
  apiKey: "AIzaSyBm_F3ygRCrDJCbj6EboyPwo3kfmR3E_H8",
  authDomain: "lali-acessorios-7de24.firebaseapp.com",
  projectId: "lali-acessorios-7de24",
  storageBucket: "lali-acessorios-7de24.appspot.com",
  messagingSenderId: "222942048953",
  appId: "1:222942048953:web:9eb3974df4f225fc03e168",
  measurementId: "G-BT7WQYJR0B"
};





/*

        firebase.initializeApp(firebaseConfig);

        const storage = firebase.storage();
        const db = firebase.firestore();
        const auth = firebase.auth();

        const provider = new firebase.auth.GoogleAuthProvider();

/*
                  //PUXAR PEDIDOS DO FIRESTORE
                db.collection('logo').onSnapshot((data) => {
            let list = document.querySelector('.container-logo');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

               <div class="container-logo">
                  <div class="central-logo">
                        <div class="card-logo">
                          <img   class="foto-logo" src ="${val.data().arquivoURL}"</div>
                            </div>
                                </div>
                                </div>
                                        `;
                                           })
                                               })


*/

/*


                       //PUXAR PEDIDOS DO FIRESTORE
                db.collection('variedades').onSnapshot((data) => {
            let list = document.querySelector('.container-variedades');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })
    
                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('caixa').onSnapshot((data) => {
            let list = document.querySelector('.container-caixa');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('carregador').onSnapshot((data) => {
            let list = document.querySelector('.container-carregador');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

                                               */


/*

                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('fone').onSnapshot((data) => {
            let list = document.querySelector('.container-fone');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('leds').onSnapshot((data) => {
            let list = document.querySelector('.container-leds');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

                                               */


/*
                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('cabo').onSnapshot((data) => {
            let list = document.querySelector('.container-cabo');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('cartão').onSnapshot((data) => {
            let list = document.querySelector('.container-cartão');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


*/
            
            /*
                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('SomCarro').onSnapshot((data) => {
            let list = document.querySelector('.container-som-carro');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


   /*============================================================================*/
/*

    //PUXAR PEDIDOS DO FIRESTORE
                db.collection('mochila').onSnapshot((data) => {
            let list = document.querySelector('.container-mochila');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })
   /*============================================================================*/
/*
    //PUXAR PEDIDOS DO FIRESTORE
                db.collection('faca').onSnapshot((data) => {
            let list = document.querySelector('.container-faca');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })
   /*============================================================================*/

/*
    //PUXAR PEDIDOS DO FIRESTORE
                db.collection('capa').onSnapshot((data) => {
            let list = document.querySelector('.container-capa');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })
   /*============================================================================*/

/*
    //PUXAR PEDIDOS DO FIRESTORE
                db.collection('calculadora').onSnapshot((data) => {
            let list = document.querySelector('.container-calculadora');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })
   /*============================================================================*/
/*

    //PUXAR PEDIDOS DO FIRESTORE
                db.collection('suporte').onSnapshot((data) => {
            let list = document.querySelector('.container-suporte');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })
   /*============================================================================*/
/*

    //PUXAR PEDIDOS DO FIRESTORE
                db.collection('teclado').onSnapshot((data) => {
            let list = document.querySelector('.container-teclado');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })
   /*============================================================================*/

/*
    //PUXAR PEDIDOS DO FIRESTORE
                db.collection('mouse').onSnapshot((data) => {
            let list = document.querySelector('.container-mouse');
            list.innerHTML = "";
            data.docs.map((val) => {
                list.innerHTML += `

                <div id="central-ID" class="central"></div>
                    <div id="container-pedidos-ID" class="container">
                        <div id="card-ID" class="card">
                          <img   id="foto" src ="${val.data().arquivoURL}"</div>
                              <p id="descriçao">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })
   /*============================================================================*/







/*

                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo1').onSnapshot((data) => {
            let titulo1 = document.querySelector('.container-titulo1');
            titulo1.innerHTML = "";
            data.docs.map((val) => {
                titulo1.innerHTML += `

               
                    <div class="container-titulo1">
                    
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                                               */
/*
                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo2').onSnapshot((data) => {
            let titulo2 = document.querySelector('.container-titulo2');
            titulo2.innerHTML = "";
            data.docs.map((val) => {
                titulo2.innerHTML += `

                    <div class="container-titulo2">
                    
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

*/

       /*                         //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo3').onSnapshot((data) => {
            let titulo3 = document.querySelector('.container-titulo3');
            titulo3.innerHTML = "";
            data.docs.map((val) => {
                titulo3.innerHTML += `

               
                    <div class="container-titulo3">
                     
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

*/
                                                //PUXAR PEDIDOS DO FIRESTORE

                                                /*
                db.collection('titulo4').onSnapshot((data) => {
            let titulo4 = document.querySelector('.container-titulo4');
            titulo4.innerHTML = "";
            data.docs.map((val) => {
                titulo4.innerHTML += `

               
                    <div class="container-titulo4">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo5').onSnapshot((data) => {
            let titulo5 = document.querySelector('.container-titulo5');
            titulo5.innerHTML = "";
            data.docs.map((val) => {
                titulo5.innerHTML += `

               
                    <div class="container-titulo5">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo6').onSnapshot((data) => {
            let titulo6 = document.querySelector('.container-titulo6');
            titulo6.innerHTML = "";
            data.docs.map((val) => {
                titulo6.innerHTML += `

               
                    <div class="container-titulo6">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo7').onSnapshot((data) => {
            let titulo7 = document.querySelector('.container-titulo7');
            titulo7.innerHTML = "";
            data.docs.map((val) => {
                titulo7.innerHTML += `

               
                    <div class="container-titulo7">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo8').onSnapshot((data) => {
            let titulo8 = document.querySelector('.container-titulo8');
            titulo8.innerHTML = "";
            data.docs.map((val) => {
                titulo8.innerHTML += `

               
                    <div class="container-titulo8">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo9').onSnapshot((data) => {
            let titulo8 = document.querySelector('.container-titulo9');
            titulo8.innerHTML = "";
            data.docs.map((val) => {
                titulo8.innerHTML += `

               
                    <div class="container-titulo9">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo10').onSnapshot((data) => {
            let titulo8 = document.querySelector('.container-titulo10');
            titulo8.innerHTML = "";
            data.docs.map((val) => {
                titulo8.innerHTML += `

               
                    <div class="container-titulo10">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo11').onSnapshot((data) => {
            let titulo8 = document.querySelector('.container-titulo11');
            titulo8.innerHTML = "";
            data.docs.map((val) => {
                titulo8.innerHTML += `

               
                    <div class="container-titulo11">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo12').onSnapshot((data) => {
            let titulo8 = document.querySelector('.container-titulo12');
            titulo8.innerHTML = "";
            data.docs.map((val) => {
                titulo8.innerHTML += `

               
                    <div class="container-titulo12">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo13').onSnapshot((data) => {
            let titulo8 = document.querySelector('.container-titulo13');
            titulo8.innerHTML = "";
            data.docs.map((val) => {
                titulo8.innerHTML += `

               
                    <div class="container-titulo13">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })


                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo14').onSnapshot((data) => {
            let titulo8 = document.querySelector('.container-titulo14');
            titulo8.innerHTML = "";
            data.docs.map((val) => {
                titulo8.innerHTML += `

               
                    <div class="container-titulo14">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })

                 //PUXAR PEDIDOS DO FIRESTORE
                db.collection('titulo15').onSnapshot((data) => {
            let titulo8 = document.querySelector('.container-titulo15');
            titulo8.innerHTML = "";
            data.docs.map((val) => {
                titulo8.innerHTML += `

               
                    <div class="container-titulo15">
                  
                       
                              <p id="descriçao-titulo">${val.data().descricao}</p>
                                </div>
                                        `;
                                           })
                                               })










