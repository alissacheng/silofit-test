import React, { Component } from 'react';

class DailyBooking extends Component {
    constructor(){
        super()
        this.state = {
            bookings: []
        }
    }

    toggleBooked = (e) => {
        e.preventDefault()

        let itemId = document.getElementById(e.target.id)

        if (itemId.innerHTML === "Book now") {
            //add email
        itemId.innerHTML = "X Cancel booking";
        } else {
        itemId.innerHTML = "Book now";
        }
    }

    render(){
        return (
        <div>
            {this.props.dates.map(day=>{
                return(
                <section>
                    <p>{day}</p>
                    <p>11:30 AM - 1 PM</p>
                    <div>
                        <button id={`${day}-1`} onClick={this.toggleBooked}>Book now</button>
                    </div>
                    <div>
                        <button id={`${day}-2`} onClick={this.toggleBooked}>Book now</button>
                    </div>
                    <div>
                        <button id={`${day}-3`} onClick={this.toggleBooked}>Book now</button>
                    </div>
                    <div>
                        <button id={`${day}-4`} onClick={this.toggleBooked}>Book now</button>
                    </div>
                    <div>
                        <button id={`${day}-5`} onClick={this.toggleBooked}>Book now</button>
                    </div>
                </section>
                )
            })}
        </div>
        )
    }
}

export default DailyBooking