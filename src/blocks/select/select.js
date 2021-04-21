const config = {
  IDs: {
    container: "select-example",
  },
  classes: {
    systemSelect: "select__system",
    options: "select__options",
    hideOptions: "select__options_hidden",
    selectedOption: "select__selected-option",
    arrowUp: "select__arrow_up",
    arrowDown: "select__arrow_down",
  },
  defaultValue: "Select option",
  optionList: ["Easy", "Moderate", "Difficult"],
};

//

class Select {
  constructor({ IDs, classes, defaultValue, optionList }) {
    this._IDs = IDs;
    this._classes = classes;
    this._optionList = optionList;

    this._containerEl = document.querySelector(`#${this._IDs.container}`);
    this._systemSelectMenuEl = this.systemSelectMenuEl(defaultValue);

    this._selectedEl = this.selectedEl(this.cached.value || defaultValue);
    this._menuEl = this.menuEl();

    // Render select box.
    this._containerEl.append(
      this._systemSelectMenuEl,
      this._selectedEl,
      this._menuEl
    );
    //

    this._selectedEl.addEventListener("click", e => {
      e.stopPropagation();
      this.toggleMenuEl();
    });

    this._menuEl.addEventListener("click", e => {
      if (e.target.classList.contains("section__option")) {
        this.updatecontainer(e.target);
      }
    });

    document.addEventListener("click", () => {
      if (!this.isMenuElHidden()) this.toggleMenuEl();
    });
  }

  get cached() {
    if (localStorage.getItem("select") !== null) {
      // console.log("Retrieved from localStorage");
      return JSON.parse(localStorage.getItem("select"))[this._IDs.container];
    } else return false;
  }

  systemSelectMenuEl(defaultOption) {
    const selectEl = document.createElement("select");
    selectEl.classList.add(this._classes.systemSelect);

    this._optionList.forEach(optionName => {
      const optionEl = document.createElement("option");

      const str = optionName.toLowerCase().replace(/\s/g, "-");
      optionEl.setAttribute("value", str);

      optionEl.textContent = optionName;

      if (optionName === defaultOption) {
        // console.log("Default option set");
        optionEl.setAttribute("selected", "");
      }

      selectEl.append(optionEl);
    });

    return selectEl;
  }

  selectedEl(defaultOption) {
    const selectEl = document.createElement("div");
    selectEl.classList.add(`${this._classes.selectedOption}`);
    selectEl.classList.add(`${this._classes.arrowDown}`);
    selectEl.append(defaultOption);

    return selectEl;
  }

  menuEl() {
    const optionsContainerEl = document.createElement("div");
    optionsContainerEl.classList.add(
      `${this._classes.options}`,
      `${this._classes.hideOptions}`
    );

    for (let systemOptionEl of this._systemSelectMenuEl.options) {
      const optionEl = document.createElement("div");
      optionEl.classList.add("section__option");
      optionEl.textContent = systemOptionEl.textContent;

      optionsContainerEl.appendChild(optionEl);
    }

    return optionsContainerEl;
  }

  toggleArrow() {
    const arrowUpClassName = this._classes.arrowUp;
    const arrowDownClassName = this._classes.arrowDown;

    if (this._selectedEl.classList.contains(arrowUpClassName)) {
      this._selectedEl.classList.remove(arrowUpClassName);
      this._selectedEl.classList.add(arrowDownClassName);
    } else {
      this._selectedEl.classList.add(arrowUpClassName);
      this._selectedEl.classList.remove(arrowDownClassName);
    }
  }

  toggleMenuEl() {
    this._menuEl.classList.toggle(`${this._classes.hideOptions}`);
    this.toggleArrow();
  }

  isMenuElHidden() {
    if (this._menuEl.classList.contains(`${this._classes.hideOptions}`)) {
      return true;
    }
  }

  updateSystemSelectedAttr(newSelected) {
    const currentlySelected = document.querySelector("option:checked");

    if (currentlySelected) {
      currentlySelected.removeAttribute("selected");
      newSelected.setAttribute("selected", "");
    }
  }

  setSystemSelectedEl(customSelectedEl) {
    const systemOptionEls = Array.from(this._systemSelectMenuEl);

    systemOptionEls.forEach((systemOptionEl, index) => {
      if (systemOptionEl.textContent === customSelectedEl.textContent) {
        systemOptionEls.selectedIndex = index;
        this.updateSystemSelectedAttr(
          systemOptionEls[systemOptionEls.selectedIndex]
        );
      }
    });
  }

  setCustomSelectedEl(customSelectedEl) {
    this._selectedEl.textContent = customSelectedEl.textContent;
  }

  updatecontainer(customSelectedEl) {
    const systemOptionEls = Array.from(this._systemSelectMenuEl);

    systemOptionEls.forEach((systemOptionEl, index) => {
      if (systemOptionEl.textContent === customSelectedEl.textContent) {
        const index = (systemOptionEls.selectedIndex = this.cached.index);

        if (systemOptionEls[index]) {
          this.updateSystemSelectedAttr(systemOptionEls[index]);
        }
        this._selectedEl.textContent = customSelectedEl.textContent;

        this.setCustomSelectedEl(customSelectedEl);
        this.setSystemSelectedEl(customSelectedEl);
        this.cacheSelected(index, customSelectedEl);
      }
    });

    this.toggleMenuEl();
  }

  cacheSelected(index, selectedEl) {
    // Create object to store selected option. Object structure:
    // selectedItem = { <select container ID>: { index: 2
    //                                           value: moderate } }
    const selectedOption = {};
    const key = this._IDs.container;
    const value = selectedEl.textContent;
    selectedOption[key] = {
      index,
      value: value,
    };
    localStorage.setItem("select", JSON.stringify(selectedOption));
  }
}

window.addEventListener("load", () => {
  const containerEl = document.querySelector(`#${config.IDs.container}`);

  const customSelect = new Select(config);
  containerEl.addEventListener("click", customSelect);
});
