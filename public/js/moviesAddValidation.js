
window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
let titleInp = document.getElementById('title');
let rating = document.getElementById('rating');
let awards = document.getElementById('awards');
let releaseDate= document.getElementById('release_date');
let length = document.getElementById('length');
let genre = document.getElementById('genre_id');
let form = document.getElementById('form');


//Focus in titler
titleInp.focus();

//validations:
titleInp.addEventListener('focus',function(){
     titleError = document.querySelector('.titleError');
    titleError.innerHTML = "";
    titleInp.classList.remove('is-valid')
});

titleInp.addEventListener('blur',function(){
    if(titleInp.value !== ''){
        titleInp.classList.add('is-valid');
        
    };
    if(titleInp.value === ''){
         titleError = document.querySelector('.titleError');
        titleError.innerHTML += 'Debe ingresar el titulo de la película';
        titleError.classList.add('is-invalid');
        
    };
    
})

//rating
rating.addEventListener('focus',function(){
     ratingError = document.querySelector('.ratingError');
    ratingError.innerHTML = "";
    rating.classList.remove('is-valid')
});

rating.addEventListener('blur',function(){
    if(rating.value !== ''){
        rating.classList.add('is-valid');
       
    };
    if(rating.value === ''){
         ratingError = document.querySelector('.ratingError');
        ratingError.innerHTML += 'Debe ingresar el rating';
        ratingError.classList.add('is-invalid');
        
    };
    if(rating.value < 0 || rating.value >10){
         ratingError = document.querySelector('.ratingError');
        ratingError.innerHTML += 'la cantidad debe ser entre 0 y 10';
        ratingError.classList.add('is-invalid');
    }
    
})

//awards
awards.addEventListener('focus',function(){
     awardsError = document.querySelector('.awardsError');
    awardsError.innerHTML = "";
    awards.classList.remove('is-valid')
});

awards.addEventListener('blur',function(){
    if(awards.value !== ''){
        awards.classList.add('is-valid');
       
    };
    if(awards.value === ''){
         awardsError = document.querySelector('.awardsError');
        awardsError.innerHTML += 'ingrese cantidad de premios';
        awardsError.classList.add('is-invalid');
        
    };
    if(awards.value < 0 || awards.value >10){
         awardsError = document.querySelector('.awardsError');
        awardsError.innerHTML += 'la cantidad debe ser entre 0 y 10';
        awardsError.classList.add('is-invalid');
    }
    
})

//releaseData
releaseDate.addEventListener('focus',function(){
     releaseError = document.querySelector('.releaseError');
    releaseError.innerHTML = "";
    releaseDate.classList.remove('is-valid')
});

releaseDate.addEventListener('blur',function(){
    if(releaseDate.value !== ''){
        releaseDate.classList.add('is-valid');
       
    };
    if(releaseDate.value === ''){
         releaseError = document.querySelector('.releaseError');
        releaseError.innerHTML += 'ingrese fecha de estreno';
        releaseError.classList.add('is-invalid');
        
    };
    
})


//length
length.addEventListener('focus',function(){
     lengthError = document.querySelector('.lengthError');
    lengthError.innerHTML = "";
    length.classList.remove('is-valid')
});

length.addEventListener('blur',function(){
    if(length.value !== ''){
        length.classList.add('is-valid');
       
    };
    if(length.value === ''){
         lengthError = document.querySelector('.lengthError');
        lengthError.innerHTML += 'ingrese duración de la película';
        lengthError.classList.add('is-invalid');
        
    };
    
})

//genres
genre.addEventListener('focus',function(){
    genreError = document.querySelector('.genreError');
    genreError.innerHTML = "";
    genre.classList.remove('is-valid')
});

genre.addEventListener('blur',function(){
    if(genre.value !== ''){
        genre.classList.add('is-valid');
       
    };
    if(genre.value === ''){
        genreError = document.querySelector('.genreError');
        genreError.innerHTML += 'ingrese género';
        genreError.classList.add('is-invalid');
        
    };
    
})


//boton
form.addEventListener('submit',function(e){
    e.preventDefault()
    inputValid = document.querySelectorAll('.is-valid')
  
         if(inputValid.length <= 6){
                
          }
    }
)
}