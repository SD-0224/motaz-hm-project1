export function displayStarsString(percentage) {
  return `
    <div class="stars-outer-container">
    <ion-icon size="medium" name="star-outline"></ion-icon>
    <ion-icon size="medium" name="star-outline"></ion-icon>
    <ion-icon size="medium" name="star-outline"></ion-icon>
    <ion-icon size="medium" name="star-outline"></ion-icon>
    <ion-icon size="medium" name="star-outline"></ion-icon>

    <div class="stars-inner-container" style="clip-path: polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0% 100%);">
      <ion-icon size="medium" name="star"></ion-icon>
      <ion-icon size="medium" name="star"></ion-icon>
      <ion-icon size="medium" name="star"></ion-icon>
      <ion-icon size="medium" name="star"></ion-icon>
      <ion-icon size="medium" name="star"></ion-icon>
    </div>
    `;
}
