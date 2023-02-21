const NavSidebarItem = (sidebar, active) => {
    let icon;

    icon = `<i class="${sidebar.iconMain}"></i>`

    return(`
        <a href="${sidebar.source}" class="list-group-item ${active}">
            <div class="row">
                <div class="col-xl-2">
                    ${icon}
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    ${sidebar.name}
                </div>
            </div>
        </a>
    `);
}

export default NavSidebarItem;