import CarData from '../Models/car.json';
class Functions{
    
      normalizer(user) {
        let { permission } = user;
        let access = [];
        let notAccess = [];
        let accessId = -1;
        for (let item in permission) {
          console.log();
          accessId++;
          if (permission[item]) {
            access.push({
              id: `item-${accessId}`,
              content: item
            });
          } else {
            notAccess.push({
              id: `item-${accessId}`,
              content: item
            });
          }
        }
        return {
          access,
          notAccess
        };
      }
      
  select(user) {
    let reselectArray = [];
    if (Object.keys(user).length > 0) {
      for (let i = 0; i < user.cars.length; i++) {
        for (let j = 0; j < CarData.length; j++) {
          if (user.cars[i].carId === CarData[j].carId) {
            reselectArray.push({
              value: CarData[j].name.toLowerCase(),
              label: CarData[j].name
            });
          }
        }
      }
      return reselectArray;
    }
  }
  normCarData(data) {
    let norma = [];
    for (let i = 0; i < data.length; i++) {
      norma.push({
        value: data[i].name.toLowerCase(),
        label: data[i].name
      });
    }
    return norma;
  }
}
const func=new Functions();
export default func;