class EntityMananger <Manager>{
    private data: Manager[] = [];
     add(item:Manager):void{
        this.data.push(item);
    }
    Getall ():Manager[]{
        return this.data;
    }

    GetById (idKey: keyof Manager , idvalue:any):Manager|undefined{
        return this.data.find(item => item[idKey] === idvalue);    }
}
