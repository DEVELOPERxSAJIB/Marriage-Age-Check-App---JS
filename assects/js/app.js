const age_form = document.getElementById('age_form');
const msg = document.querySelector('.msg');
const upmsg = document.querySelector('.upmsg');

age_form.onsubmit = (e) => {
    e.preventDefault();

    let name = age_form.querySelector('input[name="name"]');
    let age = age_form.querySelector('input[name="age"]');
    let gender = age_form.querySelectorAll('input[name="gender"]');

    let agepattern = /^[0-9]{1,3}$/
    if(name.value == '' || age.value == ''){
        upmsg.innerHTML = setAlert('All feilds are required');
    }else if (agepattern.test(age.value) == false){
        upmsg.innerHTML = setAlert('Invalid age details');
    }else {
        upmsg.innerHTML = setAlert('Calculated', 'success');
    }


    let gender_value = '';

    gender.forEach((item) => {
        if(item.checked){
            gender_value = item.value;
        }
    })

    let miarrage_age = gender_value == 'male' ? 21 : 18;

    if(gender_value == 'male'){
        if(age.value >= miarrage_age){
            msg.innerHTML = setAlert(`Hi, ${name.value} vaiya, Your mairrage age is okay`,'success');
        }else {
            msg.innerHTML = setAlert(`Hi, ${name.value} vaiya, Your mairrage age is not okey please wait ${miarrage_age - age.value} years`);
        }
    }else if (gender_value == 'female'){
        if(age.value >=  miarrage_age){
            msg.innerHTML = setAlert(`Hi, ${name.value} Apu, Your mairrage age is okey`, 'success');
        }else {
            msg.innerHTML = setAlert(`Hi, ${name.value} Apu, Your mairrage age is not okey please wait ${miarrage_age - age.value} years`);
        }
    }
}