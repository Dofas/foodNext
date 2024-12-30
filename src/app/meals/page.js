import classes from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
    return <>
        <header className={classes.header}>
            <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
            <p>Choose your favourite recipe and cook it yourself.</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share your Favourite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <MealsGrid meals={[]}/>
        </main>
    </>
}