// const input = [{name: 'john',age: 13},{name: 'John', id: 101},{name: 'Mark',age: 56},{name: 'Rachel',age: 45},
//{name: 'Nate',age: 67},{name: 'Jeniffer',age: 65}]; create grouping function that return object with
//grouped key , Output will be {"John":
//[{name: 'john',age: 13}],"Mark":
//[{name: 'Mark',age: 56}],"Rachel":
//[{name: 'Rachel',age: 45}],"Nate":
//[{name: 'Nate',age: 67}],"Jeniffer":
//[{name: 'Jeniffer',age: 65}]}


input = [
    {name: 'john',age: 13},
    {name: 'John', id: 101},
    {name: 'Mark',age: 56},
    {name: 'Rachel',age: 45},
    {name: 'Nate',age: 67},
    {name: 'Jeniffer',age: 65}];

    function grouping(input) {
        return input.reduce((cal, val) => {
          const key = val.name;
          cal[key] = cal[key] || [];
          cal[key].push({ name: val.name, age: val.age });
          return cal;
        }, {});
      }
      
      const Output = grouping(input);
      console.log(Output);