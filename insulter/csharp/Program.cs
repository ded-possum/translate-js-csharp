// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

List<string> insults = new List<string>(){
  //add insults from js  
};

List<int> indexes = new List<int>();

while(indexes.Count < 3){
    int randomNum = new Random().Next(0, insults.Count - 1)
    if(!indexes.Any(number => number == randomNum)){
        indexes.Add(randomNum)
}
}

foreach(int index in indexes){
    Console.WriteLine(insults[index])
}