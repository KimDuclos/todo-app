import React from 'react';

class ItemControl extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {
            items: []
        };
    }
    addItem(e){

    }
	render() {
		return (
			<div>
				<form onSubmit={this.addItem}>
					<label>
						Input Item:
						<input type="text" name="item" />
					</label>
					<button type="submit">Add Item</button>
					<button type="submit">Clear Item</button>
				</form>
			</div>
		);
	}
}

export default ItemControl;
