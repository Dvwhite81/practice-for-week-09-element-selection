const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    console.log(document.querySelectorAll(".seed"));
    // console.log(document.getElementsByClassName("seed"));

    // 2. Get all seedless fruit elements
    // Your code here
    console.log(document.querySelectorAll(".seedless"));
    // console.log(document.getElementsByClassName("seedless"));

    // 3. Get first seedless fruit element
    // Your code here
    console.log(document.querySelector(".seedless"));
    // console.log(document.getElementsByClassName("seedless")[0]);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    console.log(document.querySelector("span"));
    // console.log(document.getElementsByTagName("span")[0]);
    /* const section2 = document.querySelectorAll("section")[1];
    const wrapper = section2.children[1];
    const p = wrapper.children[0];
    const span = p.children[0];
    console.log(span)
    */
   // console.log(document.body.children[2].children[1].children[0].children[0]);

    // 5. Get all children of element "wrapper"
    // Your code here
    console.log(document.querySelector("#wrapper").children);
    // console.log(Array.from(document.getElementById("wrapper").children))

    // 6. Get all odd number list items in the list
    // Your code here
    console.log(document.querySelectorAll(".odd"))
    // console.log(document.getElementsByClassName("odd"))
    // console.log(document.querySelectorAll("ol li:nth-child(odd)"))

    // 7. Get all even number list items in the list
    // Your code here
    const section2 = document.querySelectorAll("section")[1];
    const list = section2.querySelector("ol");
    console.log(list.querySelectorAll(":not(.odd)"))
    // console.log(document.querySelectorAll("ol li:nth-child(even)"))


    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const section3 = document.querySelectorAll("section")[2];
    const techP = section3.children[1];
    const companies = Array.from(techP.children);
    console.log(companies);
    const noClass = [];

    companies.forEach(a => {
        if (!a.className) {
            noClass.push(a);
        }
    });

    console.log(noClass);
    // console.log(document.querySelectorAll("#three p a:not([class])"));

    // 9. Get "Amazon" list element
    // Your code here
    console.log(techP.querySelectorAll(".shopping")[0])
    // console.log(document.querySelector(".shopping"));


    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const images = document.querySelectorAll(".unicorn");
    const elements = [];

    images.forEach(img => {
        elements.push(img.parentElement);
    });

    console.log(elements);
    /* const ul = document.getElementsByTagName("ul")[1];
    const items = ul.children;
    console.log(items) */
}

window.onload = select;
