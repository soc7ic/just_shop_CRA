import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import ModalComponent from './ModalComponent';

function WrapComponent(){

    const [show, setShow] = React.useState(false);

    // 모달 열기
    const modalOpen=()=>{
        setShow(true);
    }
    // 모달 닫기
    const modalClose=()=>{
        setShow(false);
    }

    return (
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent modalOpen={modalOpen}/>
            <FooterComponent/>
            {
                show && <ModalComponent modalClose={modalClose}/>
            }
        </div>
    );
};

export default WrapComponent;