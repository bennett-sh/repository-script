# 📝Documentation

### A Simple Patch
To create a simple repository patch, import the ```createRepo``` function, call the ```Repository::patch``` function with the patch object and then save it with ```Repository::save```.
```ts
import { createRepo, RepositoryData } from 'repository-script'

const repo = createRepo()

repo.patch(
  RepositoryData.ICA_19,
  {
    "AIPerceptibleOnRelease": false
  }
)

await repo.save('./myPatch.repository.json')
```

### Adding Items
Creating a new repository item is as easy as calling ```Repository::addItem```.
```ts
// this item will have a random repository id
const myNewItem = repo.addItem({ })
// creates a new item with the repository id "b6b39b12-09c5-4320-85f4-13d711caf034"
const anotherNewItem = repo.addItem({ ID_: 'b6b39b12-09c5-4320-85f4-13d711caf034' })
```

### Getting Items
The recommended alternative for ```Repository::patch``` is ```RepositoryEntry::patch``` as it provides a sleeker syntax with less arguments.
```ts
repo
  .getItem(RepositoryData.ICA_19)
  .patch({ SomeProp: true })
```

### Mass Patches
One of the largest advantages of Repository Script is the ability to mass patch items. To do so, use the functions ```Repository::patchAll```, ```Repository::patchAllFn``` and ```Repository::patchAllAsync```.
```ts
repo.patchAll(RepositoryGroups.Pistols, {
  TestProp: 'asd'
})
repo.patchAllFn(RepositoryGroups.Explosives, item => ({
  TestProp: item.id
}))
await repo.patchAllAsync(RepositoryGroups.Tools, async (item) => ({
  TestProp: await someOtherAsyncFunction(item)
}))
```

### Referencing Items
If you have a repository item (either from ```Repository::addItem``` or ```Repository::getItem```), you don't always have to access it's id property to reference it in other items. Instead you can just pass the class as a value.
```ts
const myItem = repo.addItem({ })

repo
  .getItem(RepositoryData.ICA_19)
  .patch({ SomeOtherThing: myItem /* in plain repository json this requires you to pass the repository id */ })
```

### Values
Most data types can be used by typing them, however there are some edge cases. E.g. when you need a float that ends with .0, you can use ```Float``` or if you want any other value you can use ```Raw```, which replaces the output string's value with the provided value.
```ts
repo.patch(
  '7bd211f5-8698-4edd-a0f0-1620ea6c751d',
  {
    "SomeFloat": new Float(1) // this will be 1.0
    "ACustomProp": new Raw({ literally: 'any', value: 'can', go: 'here' }) // note: this example doesn't require the raw class so it's not recommended
  }
)
```
