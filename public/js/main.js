
    function call_delete_modal(){
        let delete_button = document.getElementsByClassName("delete");

        for(let i = 0; i < delete_button.length; i++){
            delete_button[i].addEventListener("click", () => {
                let modal = document.querySelectorAll("#modal");
                let id_message_modal = document.getElementById("id_message");
                let close = document.getElementsByClassName("close_modal");
                let delete_item = document.getElementsByClassName("delete_item");

                for(let z = 0; z < modal.length; z++){
                    id_message_modal.innerHTML = delete_button[i].getAttribute("data-id");

                    modal[z].style.display = 'flex';

                    for(let k = 0; k < close.length; k++){
                        close[k].addEventListener("click", () => {
                            modal[z].style.display = "none";
                        })
                    }

                    let toogle = true;

                    for (let p = 0; p < delete_item.length; p++) {
                        delete_item[p].addEventListener('click', () => {
                            if(toogle){
                                alert('deletou '+delete_button[i].getAttribute("data-id"));
                                modal[z].style.display = 'none';
                            }

                            toogle = false;
                        })
                    }
                }
            })
        }
    }

    call_delete_modal();