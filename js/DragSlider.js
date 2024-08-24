export class DragSlider {
  constructor(
    id,
    direction,
    scrollSpeed,
  ) {
    this.slider = document.getElementById(id);
    this.direction = direction;
    this.isDown = false;
    this.scrollSpeed = scrollSpeed;
    this.startX;
    this.scrollLeft;
    this.init()
  }

  init() {
    this.slider.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.slider.addEventListener('mouseup', this.handleMouseLeave.bind(this));
    this.slider.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    this.slider.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  handleMouseDown(e) {
    this.isDown = true
    this.slider.classList.add('active')
    this.startX = e.pageX - this.slider.offsetLeft;
    this.scrollLeft = this.slider.scrollLeft;
  }

  handleMouseLeave() {
    this.isDown = false;
    this.slider.classList.remove('active')
  }

  handleMouseMove(e) {
    if (!this.isDown){ return; }
    // e.preventDefault();
    const x = e.clientX - this.slider.offsetLeft;
    const move = (x - this.startX) * this.scrollSpeed;
    this.slider.scrollLeft = this.scrollLeft - move;
  }

}
