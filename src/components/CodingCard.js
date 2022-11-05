import React from 'react';
import Card from './Card';
import "./css/codingcard.css";
import Navbar from './Navbar';

export default function CodingCard() {
    return (
        <div>
            <div className='coding-comp'>
                <h1>Coding Profiles</h1>
                <div className='profile'>
                    <Card 
                        text={"GeeksForGeeks"}
                        info='Solved 100+ problems on GeeksforGeeks and secured
                        40 rank in the Institution among more than 1000 students'
                        links="https://auth.geeksforgeeks.org/user/ayushid549/profile"
                    />
                    <Card 
                        text={"CodeChef"}
                        info='I have solved 100+ problem on CodeChef and gave 20+ Contest on the same.' 
                        links="https://www.codechef.com/users/ayu_23"
                        />
 
                    <Card 
                        text={"Leetcode"}
                        info='I have solved more than 50+ problems on leetcode.It helped me in improving my problem solving skills.' 
                        links="https://leetcode.com/ayushid549/"
                        />
                        
                </div>
            </div>
        </div>

    )
}
