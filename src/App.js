import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
    <div className="card cardGroup__card">
            <div className="card__description cardGroup__cardDescription">
                <div className={props.className}/>
                <div className="card__descriptionText">
                    {props.descriptionText}
                    <br/>
                    {props.hint}
                </div>
            </div>
            <div className="card__price">{props.cardPrice}</div>
    </div>
);

const App = () => (
    <CardGroup>
        <Card className="icon fa fa-thumbs-o-up card__descriptionIcon" descriptionText="Trial" cardPrice="Free"/>
        <Card className="icon fa fa-trophy card__descriptionIcon" descriptionText= "Basic tier" hint="(most popular)" cardPrice="$10.00"/>
        <Card className="icon fa fa-bolt card__descriptionIcon" descriptionText="Advanced tier" hint="(only for enterprise-level professionals)" cardPrice="$6,000.00"/>
    </CardGroup>
);

export default App;
