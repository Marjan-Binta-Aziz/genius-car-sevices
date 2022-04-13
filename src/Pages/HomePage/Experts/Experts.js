import React from 'react';
import Expert from './Expert/Expert';


    const experts = [
        {id: 1, name:'Will Smith', img:'https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=996'},

        
        {id: 2, name:'Chirs Rock', img:'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?t=st=1649615761~exp=1649616361~hmac=f897751666d9f054f640888d5eae744eb05af525ac653f4c81a1bf1673bb2aae&w=996'},

        
        {id: 3, name:'Dwayne Rock', img:'https://img.freepik.com/free-photo/smiling-positive-brunette-brown-eyed-lady-stylish-outfit-posing-beige-room_197531-14214.jpg?t=st=1649615852~exp=1649616452~hmac=71954ea96ad62ad401e86d31c4d67027dda6511e6e752a2404b9a3228086dcec&w=996'},

        
        {id: 4, name:'Ronaldo', img:'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1649615761~exp=1649616361~hmac=bbb411ce360c5dc25c99bb23413e8ef025553311b7becbc8918b4013bdcbf5bc&w=996'},

        
        {id: 5, name:'Jonson', img:'https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?t=st=1649615852~exp=1649616452~hmac=4cc19e2e2656f0109cfb890986adf39d605d868ea6472ba4ba3545a8f2f7ea1a&w=996'},

        
        {id: 6, name:'Hook Steven', img:'https://img.freepik.com/free-photo/confident-pretty-business-woman-with-arms-crossed_1262-2992.jpg?t=st=1649615852~exp=1649616452~hmac=31951f0ee46adcae085d1944f83df0e2635624a9f9acc7cb0c7c3daabf1153b4&w=996'}

        
        
    ]


const Experts = () => {
    return (
        <div >
            <h2 id='experts' className='text-center pt-5'>Our Experts</h2>
            <div className='row w-100'>
        {
            experts.map(expert => <Expert
                
                key = {expert.id}
                expert = {expert}
            
            ></Expert>)
        }
            </div>
        </div>
    );
};

export default Experts;