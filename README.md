# Engineering Student Portal

A comprehensive web-based student management system with JSON database integration and complete authentication system.

## Features

### Authentication System
- **Login/Register**: Secure authentication with role-based access
- **User Roles**: Student and Teacher with different permissions
- **Session Management**: Persistent login sessions with localStorage
- **Password Security**: Password validation and change functionality

### Database Integration
- **JSON Database**: Complete data structure with users, classes, assignments, attendance, and grades
- **CRUD Operations**: Full Create, Read, Update, Delete functionality
- **Data Persistence**: LocalStorage integration for client-side data persistence
- **Real-time Updates**: Dynamic data loading and synchronization

### Core Modules

#### 1. Dashboard
- **Student View**: GPA tracking, attendance rates, pending assignments, announcements
- **Teacher View**: Student counts, class management overview
- **Dynamic Cards**: Real-time data from database
- **Quick Actions**: Fast access to common tasks

#### 2. User Management
- **Profile Management**: Update personal information, change passwords
- **Role-based UI**: Different interfaces for students and teachers
- **User Preferences**: Theme switching, notification settings

#### 3. Class Management
- **Teacher Features**: Create classes, manage student enrollment
- **Student Features**: View enrolled classes and class details
- **Real-time Updates**: Add/remove students with database synchronization

#### 4. Assignment System
- **Assignment Creation**: Teachers can create assignments with due dates
- **Submission System**: Students can submit assignments
- **Grading System**: Teachers can grade submissions with feedback
- **Progress Tracking**: Real-time submission and grading status

#### 5. Attendance Tracking
- **Daily Attendance**: Teachers can mark attendance for each class
- **Student Statistics**: Comprehensive attendance analytics
- **Monthly Reports**: Attendance trends and patterns
- **Threshold Monitoring**: Automatic warnings for low attendance

#### 6. Reports & Analytics
- **GPA Trends**: Visual representation of academic performance
- **Attendance Reports**: Detailed attendance analytics
- **Subject Performance**: Individual subject grade analysis
- **Export Options**: CSV and JSON export capabilities

## Technical Implementation

### Database Structure
```json
{
  "users": [...],        // Student and teacher profiles
  "classes": [...],      // Class information and enrollment
  "assignments": [...],  // Assignment details and submissions
  "attendance": [...],   // Daily attendance records
  "grades": [...],       // Grade tracking and GPA calculation
  "notifications": [...], // System notifications
  "settings": {...}      // System configuration
}
```

### Key Technologies
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Database**: JSON with localStorage persistence
- **Authentication**: Session-based with role management
- **UI Framework**: Custom CSS with modern design patterns
- **Charts**: HTML5 Canvas for data visualization

### File Structure
```
├── index.html          # Landing page
├── main.html           # Login/Register page
├── dashboard.html      # Main dashboard
├── profile.html        # User profile management
├── classes.html        # Class management
├── assignments.html    # Assignment system
├── attendance.html     # Attendance tracking
├── reports.html        # Analytics and reports
├── js/
│   └── database.js     # Database manager
└── data.json          # Initial database structure
```

## Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Local web server (recommended for file access)

### Installation
1. Clone or download the project files
2. Place all files in your web server directory
3. Open `index.html` in your browser

### Default Login Credentials

**Student Account:**
- Email: `sarthak@engineering.edu`
- Password: `student123`

**Teacher Account:**
- Email: `priya.sharma@engineering.edu`
- Password: `teacher123`

### Initial Setup
1. Access the login page via `main.html`
2. Use default credentials or register a new account
3. Explore the different modules based on your role

## Database Operations

### User Management
- **Registration**: Creates new user with role-specific fields
- **Authentication**: Validates credentials and manages sessions
- **Profile Updates**: Modify user information and preferences

### Class Operations
- **Enrollment**: Add/remove students from classes
- **Class Creation**: Teachers can create new classes
- **Schedule Management**: Track class schedules and rooms

### Assignment Workflow
1. **Creation**: Teacher creates assignment with details
2. **Submission**: Students submit their work
3. **Grading**: Teacher grades and provides feedback
4. **Tracking**: Real-time status updates

### Attendance System
1. **Daily Marking**: Teachers mark attendance per class
2. **Statistics**: Automatic calculation of attendance rates
3. **Reporting**: Generate attendance reports and trends

## Advanced Features

### Theme System
- Light/Dark mode toggle
- Persistent theme preferences
- Consistent styling across all pages

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interface

### Data Export
- CSV export for spreadsheet analysis
- JSON export for data backup
- Print-friendly report generation

### Notification System
- Real-time alerts for important events
- Grade notifications
- Assignment reminders

## Security Features

### Authentication
- Password validation (minimum 6 characters)
- Session management with automatic logout
- Role-based access control

### Data Protection
- Client-side data validation
- Secure password handling
- User input sanitization

## Customization

### Adding New Features
1. Extend the database schema in `data.json`
2. Add CRUD methods to `database.js`
3. Create UI components in respective HTML files
4. Update navigation and routing

### Styling Modifications
- CSS variables for easy theme customization
- Modular CSS structure
- Responsive breakpoints

## Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Future Enhancements
- Real backend database integration
- File upload functionality
- Email notifications
- Advanced analytics
- Mobile app development
- Multi-language support

## Support
For technical support or feature requests, please refer to the project documentation or contact the development team.

---

*This system was designed for educational purposes and demonstrates modern web development practices with a focus on user experience and data management.*
