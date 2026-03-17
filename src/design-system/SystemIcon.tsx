import { designSystemStyles } from "@styles/designSystemStyles"
import { ReactComponent as BellIcon } from "@assets/SVGs/DesignSystem/bell.svg";
import { ReactComponent as BankIcon } from "@assets/SVGs/DesignSystem/bank.svg";
import { ReactComponent as BuildingIcon } from "@assets/SVGs/DesignSystem/building.svg";
import { ReactComponent as CalendarIcon } from "@assets/SVGs/DesignSystem/calendar.svg";
import { ReactComponent as CameraIcon } from "@assets/SVGs/DesignSystem/camera.svg";
import { ReactComponent as CheckIcon } from "@assets/SVGs/DesignSystem/check.svg";
import { ReactComponent as ChartIcon } from "@assets/SVGs/DesignSystem/chart.svg";
import { ReactComponent as Chart2Icon } from "@assets/SVGs/DesignSystem/chart2.svg";
import { ReactComponent as ChevronIcon } from "@assets/SVGs/DesignSystem/chevron.svg";
import { ReactComponent as ClockIcon } from "@assets/SVGs/DesignSystem/clock.svg";
import { ReactComponent as DarkModeIcon } from "@assets/SVGs/DesignSystem/dark_mode.svg";
import { ReactComponent as DashboardIcon } from "@assets/SVGs/DesignSystem/dashboard.svg";
import { ReactComponent as DeleteIcon } from "@assets/SVGs/DesignSystem/delete.svg";
import { ReactComponent as DownloadIcon } from "@assets/SVGs/DesignSystem/download.svg";
import { ReactComponent as EditIcon } from "@assets/SVGs/DesignSystem/edit.svg";
import { ReactComponent as EyeIcon } from "@assets/SVGs/DesignSystem/eye.svg";
import { ReactComponent as FaceIcon } from "@assets/SVGs/DesignSystem/face.svg";
import { ReactComponent as FinderIcon } from "@assets/SVGs/DesignSystem/finder.svg";
import { ReactComponent as HelpIcon } from "@assets/SVGs/DesignSystem/help.svg";
import { ReactComponent as HomeIcon } from "@assets/SVGs/DesignSystem/home.svg";
import { ReactComponent as InboxIcon } from "@assets/SVGs/DesignSystem/inbox.svg";
import { ReactComponent as ListadoIcon } from "@assets/SVGs/DesignSystem/listado.svg";
import { ReactComponent as LogoutIcon } from "@assets/SVGs/DesignSystem/logout.svg";
import { ReactComponent as NotesIcon } from "@assets/SVGs/DesignSystem/notes.svg";
import { ReactComponent as PeopleIcon } from "@assets/SVGs/DesignSystem/people.svg";
import { ReactComponent as People2Icon } from "@assets/SVGs/DesignSystem/people2.svg";
import { ReactComponent as ProfileIcon } from "@assets/SVGs/DesignSystem/profile.svg";
import { ReactComponent as QrIcon } from "@assets/SVGs/DesignSystem/qr.svg";
import { ReactComponent as SearchIcon } from "@assets/SVGs/DesignSystem/search.svg";
import { ReactComponent as SendIcon } from "@assets/SVGs/DesignSystem/send.svg";
import { ReactComponent as SettingsIcon } from "@assets/SVGs/DesignSystem/settings.svg";
import { ReactComponent as TicketIcon } from "@assets/SVGs/DesignSystem/ticket.svg";
import { ReactComponent as WallIcon } from "@assets/SVGs/DesignSystem/wall.svg";
import { ReactComponent as BoxIcon } from "@assets/SVGs/DesignSystem/box.svg";

export interface SystemIconProps {
    color: string
    type:
        | 'bell'
        | 'bank'
        | 'building'
        | 'calendar'
        | 'camera'
        | 'check'
        | 'chart'
        | 'chart2'
        | 'chevron'
        | 'clock'
        | 'dark_mode'
        | 'dashboard'
        | 'delete'
        | 'download'
        | 'edit'
        | 'eye'
        | 'face'
        | 'finder'
        | 'help'
        | 'home'
        | 'inbox'
        | 'listado'
        | 'logout'
        | 'notes'
        | 'people'
        | 'people2'
        | 'profile'
        | 'qr'
        | 'search'
        | 'send'
        | 'settings'
        | 'ticket'
        | 'wall'
        | 'box'
    className?: string
}
export const SystemIcon: React.FC<SystemIconProps> = (props) => {
    const iconStyle = {
        width: '24px',
        height: '24px',
        color: props.color ?? designSystemStyles.colorText
    };
    const iconClassName = ['DSSystemIcon', props.className].filter(Boolean).join(' ');

    switch(props.type) {
        case 'bell':
            return <BellIcon style={iconStyle} className={iconClassName} />;
        case 'bank':
            return <BankIcon style={iconStyle} className={iconClassName} />;
        case 'building':
            return <BuildingIcon style={iconStyle} className={iconClassName} />;
        case 'calendar':
            return <CalendarIcon style={iconStyle} className={iconClassName} />;
        case 'camera':
            return <CameraIcon style={iconStyle} className={iconClassName} />;
        case 'check':
            return <CheckIcon style={iconStyle} className={iconClassName} />;
        case 'chart':
            return <ChartIcon style={iconStyle} className={iconClassName} />;
        case 'chart2':
            return <Chart2Icon style={iconStyle} className={iconClassName} />;
        case 'chevron':
            return <ChevronIcon style={iconStyle} className={iconClassName} />;
        case 'clock':
            return <ClockIcon style={iconStyle} className={iconClassName} />;
        case 'dark_mode':
            return <DarkModeIcon style={iconStyle} className={iconClassName} />;
        case 'dashboard':
            return <DashboardIcon style={iconStyle} className={iconClassName} />;
        case 'edit':
            return <EditIcon style={iconStyle} className={iconClassName} />;
        case 'delete':
            return <DeleteIcon style={iconStyle} className={iconClassName} />;
        case 'download':
            return <DownloadIcon style={iconStyle} className={iconClassName} />;
        case 'eye':
            return <EyeIcon style={iconStyle} className={iconClassName} />;
        case 'face':
            return <FaceIcon style={iconStyle} className={iconClassName} />;
        case 'finder':
            return <FinderIcon style={iconStyle} className={iconClassName} />;
        case 'help':
            return <HelpIcon style={iconStyle} className={iconClassName} />;
        case 'home':
            return <HomeIcon style={iconStyle} className={iconClassName} />;
        case 'inbox':
            return <InboxIcon style={iconStyle} className={iconClassName} />;
        case 'listado':
            return <ListadoIcon style={iconStyle} className={iconClassName} />;
        case 'logout':
            return <LogoutIcon style={iconStyle} className={iconClassName} />;
        case 'notes':
            return <NotesIcon style={iconStyle} className={iconClassName} />;
        case 'people':
            return <PeopleIcon style={iconStyle} className={iconClassName} />;
        case 'people2':
            return <People2Icon style={iconStyle} className={iconClassName} />;
        case 'profile':
            return <ProfileIcon style={iconStyle} className={iconClassName} />;
        case 'qr':
            return <QrIcon style={iconStyle} className={iconClassName} />;
        case 'search':
            return <SearchIcon style={iconStyle} className={iconClassName} />;
        case 'send':
            return <SendIcon style={iconStyle} className={iconClassName} />;
        case 'settings':
            return <SettingsIcon style={iconStyle} className={iconClassName} />;
        case 'ticket':
            return <TicketIcon style={iconStyle} className={iconClassName} />;
        case 'wall':
            return <WallIcon style={iconStyle} className={iconClassName} />;
        case "box":
            return <BoxIcon style={iconStyle} className={iconClassName} />;
    }
}
