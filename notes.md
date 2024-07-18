# Notes for ultimate react course Udemy

## Section 6

### Use array as option in select

The tips is using javascript and array to create option selection

```
<select>
    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
        <option value={num} key={num}>{num}</option>
    ))}
</select>
```

### Controlled Elements

Able react to controls and own the state of input fields and no longer the DOM

In our example the goal is letting, react control the value given as an input in a form. 3 steps are needed :

```function Form() {
const [description, setDescription] = useState(""); # Step 1
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need for your trip ? 😍</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)> # Using the "+" its same as Number function in JS
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description} # Step 2
        onChange={(e) => setDescription(e.target.value)} # Step 3
      />
      <button>Add</button>
    </form>
  );
}
```

### State vs props

#### State

- internal data, ownedy component
- component memory
- Can be updated by component itself
- updating state causes component to re-render
- Used to make component interactive

#### Props

- External data, owned by parent component
- Similar to function parameters
- Read-only
- Receiving new propos causing component to re-render ( Usually when parent's state has been updated )
- Used by parent to configure child component
