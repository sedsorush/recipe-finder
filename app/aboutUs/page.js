import styles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <div className="relative flex size-full min-h-[673.1999px] flex-col bg-[#f5f5dc] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="@[900px]:px-40 px-5 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex w-full flex-col items-center gap-3">
                <p
                  className={`${styles.pOne}text-[#181411] tracking-light text-[32px] font-bold leading-tight`}>
                  About Us
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-[8px] bg-[#fffff0] px-4 py-20">
              <div className="flex flex-col items-center gap-6">
                <div className="flex w-full flex-col items-center px-10 gap-5">
                  <p
                    className={`${styles.pTwo} text-[#897361] text-md font-normal text-pretty w-full text-justify`}>
                    Welcome to <strong>Recipe Finder</strong>!🌟{" "}
                  </p>
                  <p
                    className={`${styles.pThree} text-[#897361] text-md font-normal text-pretty w-full text-justify`}>
                    At <strong>Recipe Finder</strong>, we&apos;re passionate about
                    making culinary exploration effortless and exciting for
                    everyone. Whether you&apos;re a seasoned chef or a kitchen
                    newbie, our mission is to empower you to discover
                    mouthwatering recipes that match your taste, mood, and
                    ingredients on hand. Our website lets you:
                  </p>
                  <p
                    className={`${styles.pFour} text-[#897361] text-md font-normal text-pretty w-full text-justify`}>
                    <span className="italic">Search by Food Name:</span> Craving
                    something specific? Just type in the name of the dish, and
                    we&apos;ll serve up a collection of delectable recipes for you to
                    try.
                  </p>
                  <p
                    className={`${styles.pFive} text-[#897361] text-md font-normal text-pretty w-full text-justify`}>
                    <span className="italic">Ingredient-Based Search:</span> Got
                    a handful of ingredients but not sure what to cook? Enter
                    what you have, and we&apos;ll whip up an array of recipes that
                    make the best use of your pantry.
                  </p>
                  <p
                    className={`${styles.pSix} text-[#897361] text-md font-normal text-pretty w-full text-justify`}>
                    With a diverse range of cuisines, dietary options, and dish
                    types, provided by{" "}
                    <a
                      className="text-[#cb8851] text-md"
                      href="https://spoonacular.com/">
                      spoonacular
                    </a>{" "}
                    APIs. <strong>Recipe Finder</strong> is here to inspire your
                    culinary creativity and bring delicious dishes to your
                    table. Join our community of food lovers and embark on a
                    flavorful journey with us!
                  </p>
                  <p
                    className={`${styles.pSeven} text-[#897361] text-md font-normal text-pretty w-full text-justify`}>
                    Happy cooking! 🍽️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
