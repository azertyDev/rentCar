let user={
    name:'abbos',
    cars:['nexia', 'damas']
}

user={
    ...user,
    get cars(){
        let that=this;
        return that.cars
    }
}

console.log(user.cars);