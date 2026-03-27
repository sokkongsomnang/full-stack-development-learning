function ticketSale(age, time, member) {
    let ticket = 0
    let discount = 0
    for(let i = 0; i < sale_ticket.length; i++){
        console.log("------- Ticket Details -------")
        console.log("Age\t : " + sale_ticket[i].age)
        console.log("Time\t : " + sale_ticket[i].time)
        console.log("Member\t : " + sale_ticket[i].member)
        console.log("------- Ticket Price -------")
        if(sale_ticket[i].age < 18 && sale_ticket[i].member == true){
            ticket = 20
            discount = 0.5
            ticket = ticket - (ticket * discount)
            console.log("Ticket price is $" + ticket)
            continue
        }else if(sale_ticket[i].age < 18 && sale_ticket[i].member == false){
            ticket = 20
            discount = 0.3
            ticket = ticket - (ticket * discount)
            console.log("Ticket price is $" + ticket)
            continue
        }else if(sale_ticket[i].age >= 18 && sale_ticket[i].member == true){
            ticket = 20
            discount = 0.2
            ticket = ticket - (ticket * discount)
            console.log("Ticket price is $" + ticket)
            continue
        }else{
            ticket = 20
            console.log("Ticket price is $" + ticket)
        }
    }
}
let sale_ticket = [
    {age : 18, time : "12pm", member : false},
    {age : 16, time : "09am", member : true},
    {age : 17, time : "11am", member : false},
    {age : 20, time : "01pm", member : true}
]
ticketSale(sale_ticket)
