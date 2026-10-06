/**
 * Database Manager for Engineering Student Portal
 * Handles all CRUD operations with JSON database and localStorage persistence.
 */

const INITIAL_DATABASE = {
    users: [
        {
            id: 1,
            name: "Sarthak Kumar",
            email: "sarthak@engineering.edu",
            password: "student123",
            role: "student",
            rollNo: "ENG001",
            classId: 101,
            address: "123 Main Street, City, State",
            phone: "+1234567890",
            dateOfBirth: "2002-05-15",
            enrollmentYear: 2021,
            department: "Computer Science",
            createdAt: "2023-01-15T00:00:00Z",
            lastLogin: "2025-10-02T08:00:00Z"
        },
        {
            id: 2,
            name: "Dr. Priya Sharma",
            email: "priya.sharma@engineering.edu",
            password: "teacher123",
            role: "teacher",
            employeeId: "EMP001",
            department: "Computer Science",
            qualification: "PhD in Computer Science",
            experience: 8,
            address: "456 University Avenue, City, State",
            phone: "+1234567891",
            dateOfJoining: "2018-07-01",
            createdAt: "2023-01-10T00:00:00Z",
            lastLogin: "2025-10-02T09:00:00Z"
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice@engineering.edu",
            password: "student123",
            role: "student",
            rollNo: "ENG002",
            classId: 101,
            address: "789 Student Street, City, State",
            phone: "+1234567892",
            dateOfBirth: "2002-08-22",
            enrollmentYear: 2021,
            department: "Computer Science",
            createdAt: "2023-01-15T00:00:00Z",
            lastLogin: "2025-10-01T16:30:00Z"
        },
        {
            id: 4,
            name: "Bob Smith",
            email: "bob@engineering.edu",
            password: "student123",
            role: "student",
            rollNo: "ENG003",
            classId: 102,
            address: "321 College Road, City, State",
            phone: "+1234567893",
            dateOfBirth: "2002-03-10",
            enrollmentYear: 2021,
            department: "Mechanical Engineering",
            createdAt: "2023-01-15T00:00:00Z",
            lastLogin: "2025-09-30T14:15:00Z"
        },
        {
            id: 5,
            name: "Prof. Rajesh Gupta",
            email: "rajesh.gupta@engineering.edu",
            password: "teacher123",
            role: "teacher",
            employeeId: "EMP002",
            department: "Mechanical Engineering",
            qualification: "PhD in Mechanical Engineering",
            experience: 12,
            address: "654 Faculty Lane, City, State",
            phone: "+1234567894",
            dateOfJoining: "2015-08-15",
            createdAt: "2023-01-10T00:00:00Z",
            lastLogin: "2025-10-01T11:20:00Z"
        }
    ],
    classes: [
        {
            id: 101,
            name: "Data Structures and Algorithms",
            code: "CS201",
            department: "Computer Science",
            teacherId: 2,
            schedule: "Mon/Wed/Fri 10:00-11:00",
            room: "CS-101",
            semester: "Fall 2025",
            credits: 4,
            maxStudents: 60,
            description: "Introduction to fundamental data structures, search trees, graphs and algorithm analysis",
            students: [1, 3],
            createdAt: "2025-08-01T00:00:00Z"
        },
        {
            id: 102,
            name: "Thermodynamics",
            code: "ME305",
            department: "Mechanical Engineering",
            teacherId: 5,
            schedule: "Tue/Thu 11:30-13:00",
            room: "ME-201",
            semester: "Fall 2025",
            credits: 3,
            maxStudents: 45,
            description: "Principles of thermodynamics, cycles, and heat transfer mechanisms",
            students: [4],
            createdAt: "2025-08-01T00:00:00Z"
        },
        {
            id: 103,
            name: "Digital Logic Design",
            code: "EC203",
            department: "Computer Science",
            teacherId: 2,
            schedule: "Mon/Wed 14:00-15:30",
            room: "EC-102",
            semester: "Fall 2025",
            credits: 3,
            maxStudents: 50,
            description: "Boolean algebra, combinational logic design, and sequential circuit fundamentals",
            students: [1, 3],
            createdAt: "2025-08-01T00:00:00Z"
        }
    ],
    assignments: [
        {
            id: 1,
            title: "Binary Search Tree Implementation",
            description: "Implement a complete binary search tree with insertion, deletion, and traversal methods",
            classId: 101,
            teacherId: 2,
            maxMarks: 100,
            dueDate: "2025-10-15",
            createdDate: "2025-09-01",
            instructions: "Submit your code along with documentation and test cases",
            submissionFormat: "ZIP file",
            status: "active",
            submissions: [
                {
                    studentId: 1,
                    submittedAt: "2025-10-01T14:30:00Z",
                    fileUrl: "/submissions/assignment1_eng001.zip",
                    submissionNote: "Implemented AVL rebalancing as well",
                    marks: 88,
                    feedback: "Good implementation, clean code and tests",
                    gradedAt: "2025-10-02T10:00:00Z",
                    gradedBy: 2
                },
                {
                    studentId: 3,
                    submittedAt: "2025-10-02T16:45:00Z",
                    fileUrl: "/submissions/assignment1_eng002.zip",
                    submissionNote: "Completed all tree traversals",
                    marks: null,
                    feedback: null,
                    gradedAt: null,
                    gradedBy: null
                }
            ]
        },
        {
            id: 2,
            title: "Heat Engine Analysis",
            description: "Analyze the efficiency of different heat engine cycles",
            classId: 102,
            teacherId: 5,
            maxMarks: 75,
            dueDate: "2025-10-20",
            createdDate: "2025-09-15",
            instructions: "Provide detailed calculations and graphical analysis",
            submissionFormat: "PDF Report",
            status: "active",
            submissions: [
                {
                    studentId: 4,
                    submittedAt: "2025-10-01T09:15:00Z",
                    fileUrl: "/submissions/assignment2_eng003.pdf",
                    submissionNote: "Calculations included for Carnot and Rankine cycles",
                    marks: 70,
                    feedback: "Accurate calculations but could improve presentation",
                    gradedAt: "2025-10-02T15:30:00Z",
                    gradedBy: 5
                }
            ]
        },
        {
            id: 3,
            title: "Logic Gate Circuit Design",
            description: "Design and simulate logic circuits for given boolean expressions",
            classId: 103,
            teacherId: 2,
            maxMarks: 80,
            dueDate: "2025-11-01",
            createdDate: "2025-09-20",
            instructions: "Use simulation software and provide circuit diagrams",
            submissionFormat: "PDF + Simulation files",
            status: "active",
            submissions: []
        }
    ],
    practicals: [
        {
            id: 1,
            title: "Binary Search Tree Operations Lab",
            description: "Implement node insertion, deletion, and inorder traversal in C++",
            classId: 101,
            teacherId: 2,
            dueDate: "2025-10-25",
            maxMarks: 50,
            status: "pending",
            submissions: [
                {
                    studentId: 1,
                    submittedAt: "2025-10-02T11:00:00Z",
                    fileUrl: "/submissions/practical1_ENG001.zip",
                    submissionNote: "Completed BST operations with full unit tests",
                    marks: 46,
                    feedback: "Clean implementation and good documentation",
                    gradedAt: "2025-10-03T09:30:00Z",
                    gradedBy: 2
                }
            ],
            createdAt: "2025-09-10T00:00:00Z"
        },
        {
            id: 2,
            title: "Heat Conduction & Heat Exchanger Lab",
            description: "Measure thermal conductivity and verify Fourier's Law of Heat Conduction",
            classId: 102,
            teacherId: 5,
            dueDate: "2025-10-28",
            maxMarks: 50,
            status: "pending",
            submissions: [
                {
                    studentId: 4,
                    submittedAt: "2025-10-01T15:20:00Z",
                    fileUrl: "/submissions/practical2_ENG003.zip",
                    submissionNote: "Observed and tabulated temperature gradient data",
                    marks: 43,
                    feedback: "Calculations accurate, graph neatly plotted",
                    gradedAt: "2025-10-02T16:00:00Z",
                    gradedBy: 5
                }
            ],
            createdAt: "2025-09-12T00:00:00Z"
        },
        {
            id: 3,
            title: "Combinational & Sequential Circuits Lab",
            description: "Design and verify 4-bit synchronous counter on simulation breadboard",
            classId: 103,
            teacherId: 2,
            dueDate: "2025-11-05",
            maxMarks: 50,
            status: "pending",
            submissions: [],
            createdAt: "2025-09-15T00:00:00Z"
        }
    ],
    attendance: [
        {
            id: 1,
            classId: 101,
            date: "2025-09-01",
            records: [
                { studentId: 1, status: "present" },
                { studentId: 3, status: "present" }
            ],
            markedBy: 2,
            markedAt: "2025-09-01T10:05:00Z"
        },
        {
            id: 2,
            classId: 101,
            date: "2025-09-03",
            records: [
                { studentId: 1, status: "present" },
                { studentId: 3, status: "absent" }
            ],
            markedBy: 2,
            markedAt: "2025-09-03T10:05:00Z"
        },
        {
            id: 3,
            classId: 102,
            date: "2025-09-02",
            records: [
                { studentId: 4, status: "present" }
            ],
            markedBy: 5,
            markedAt: "2025-09-02T11:35:00Z"
        },
        {
            id: 4,
            classId: 103,
            date: "2025-09-01",
            records: [
                { studentId: 1, status: "present" },
                { studentId: 3, status: "present" }
            ],
            markedBy: 2,
            markedAt: "2025-09-01T14:05:00Z"
        },
        {
            id: 5,
            classId: 101,
            date: "2025-09-06",
            records: [
                { studentId: 1, status: "present" },
                { studentId: 3, status: "present" }
            ],
            markedBy: 2,
            markedAt: "2025-09-06T10:05:00Z"
        },
        {
            id: 6,
            classId: 102,
            date: "2025-09-05",
            records: [
                { studentId: 4, status: "absent" }
            ],
            markedBy: 5,
            markedAt: "2025-09-05T11:35:00Z"
        }
    ],
    grades: [
        {
            id: 1,
            studentId: 1,
            classId: 101,
            semester: "Fall 2025",
            assignments: [
                { assignmentId: 1, marks: 88, maxMarks: 100 }
            ],
            midtermMarks: 85,
            finalMarks: 92,
            totalMarks: 88,
            grade: "A",
            gpa: 3.8
        },
        {
            id: 2,
            studentId: 1,
            classId: 103,
            semester: "Fall 2025",
            assignments: [],
            midtermMarks: 80,
            finalMarks: 85,
            totalMarks: 83,
            grade: "B",
            gpa: 3.4
        },
        {
            id: 3,
            studentId: 3,
            classId: 101,
            semester: "Fall 2025",
            assignments: [],
            midtermMarks: 78,
            finalMarks: 82,
            totalMarks: 80,
            grade: "B",
            gpa: 3.2
        },
        {
            id: 4,
            studentId: 4,
            classId: 102,
            semester: "Fall 2025",
            assignments: [
                { assignmentId: 2, marks: 70, maxMarks: 75 }
            ],
            midtermMarks: 82,
            finalMarks: 88,
            totalMarks: 85,
            grade: "A-",
            gpa: 3.6
        }
    ],
    notifications: [
        {
            id: 1,
            userId: 1,
            title: "Assignment Graded",
            message: "Your Binary Search Tree Implementation has been graded. Score: 88/100",
            type: "grade",
            read: false,
            createdAt: "2025-10-02T10:00:00Z"
        },
        {
            id: 2,
            userId: 3,
            title: "Assignment Due Soon",
            message: "Binary Search Tree Implementation is due in 3 days",
            type: "reminder",
            read: false,
            createdAt: "2025-10-02T08:00:00Z"
        },
        {
            id: 3,
            userId: 2,
            title: "Class Attendance Marked",
            message: "Attendance recorded for Data Structures and Algorithms",
            type: "attendance",
            read: false,
            createdAt: "2025-10-02T10:10:00Z"
        }
    ],
    settings: {
        academic_year: "2025-2026",
        current_semester: "Fall 2025",
        semester_start: "2025-08-01",
        semester_end: "2025-12-15",
        attendance_threshold: 75,
        grading_scale: {
            A: 90,
            B: 80,
            C: 70,
            D: 60,
            F: 0
        }
    }
};

class DatabaseManager {
    constructor() {
        this.data = null;
        this.currentUser = null;
        
        // Immediately initialize data synchronously from localStorage or INITIAL_DATABASE
        const loaded = this.loadStoredData();
        if (!loaded || !this.data || !this.data.users || this.data.users.length === 0) {
            this.data = JSON.parse(JSON.stringify(INITIAL_DATABASE));
            this.saveData();
        }

        this.loadCurrentUser();
    }

    async loadData() {
        try {
            const response = await fetch('./data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();
            if (jsonData && jsonData.users && jsonData.users.length > 0) {
                this.data = jsonData;
                this.saveData();
                console.log('Database loaded successfully from data.json');
            }
        } catch (error) {
            console.warn('Could not fetch data.json (likely local file:// protocol). Using initialized local data.');
            if (!this.data || !this.data.users || this.data.users.length === 0) {
                this.data = JSON.parse(JSON.stringify(INITIAL_DATABASE));
                this.saveData();
            }
        }
    }

    saveData() {
        try {
            localStorage.setItem('engineeringPortalData', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving data to localStorage:', error);
        }
    }

    loadStoredData() {
        try {
            const storedData = localStorage.getItem('engineeringPortalData');
            if (storedData) {
                const parsed = JSON.parse(storedData);
                if (parsed && Array.isArray(parsed.users) && parsed.users.length > 0) {
                    this.data = parsed;
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error('Error loading stored data:', error);
            return false;
        }
    }

    resetData() {
        this.data = JSON.parse(JSON.stringify(INITIAL_DATABASE));
        this.saveData();
        this.loadCurrentUser();
        console.log('Database reset to initial default state.');
        return true;
    }

    // Authentication Methods
    login(email, password) {
        if (!this.data || !this.data.users) {
            throw new Error('Database not loaded');
        }

        const user = this.data.users.find(u => 
            u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password
        );

        if (user) {
            user.lastLogin = new Date().toISOString();
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.saveData();
            return user;
        }
        return null;
    }

    register(userData) {
        if (!this.data || !this.data.users) {
            throw new Error('Database not loaded');
        }

        const email = (userData.email || '').trim().toLowerCase();
        const existingUser = this.data.users.find(u => u.email.toLowerCase() === email);

        if (existingUser) {
            throw new Error('Email already registered');
        }

        if (userData.role === 'student' && userData.rollNo) {
            const roll = userData.rollNo.trim().toUpperCase();
            const existingRoll = this.data.users.find(u => (u.rollNo || '').toUpperCase() === roll);
            if (existingRoll) {
                throw new Error('Roll number already registered');
            }
        }

        const newUser = {
            id: this.generateId('users'),
            ...userData,
            email: email,
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };

        this.data.users.push(newUser);
        this.saveData();
        
        // Automatically log in the newly registered user
        this.currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        return newUser;
    }

    addUser(userData) {
        if (!this.data || !this.data.users) return false;
        
        const email = (userData.email || '').trim().toLowerCase();
        const existingEmail = this.data.users.find(u => u.email.toLowerCase() === email);
        if (existingEmail) return false;

        if (userData.role === 'student' && userData.rollNo) {
            const roll = userData.rollNo.trim().toUpperCase();
            const existingRoll = this.data.users.find(u => (u.rollNo || '').toUpperCase() === roll);
            if (existingRoll) return false;
        }

        const newUser = {
            id: this.generateId('users'),
            ...userData,
            email: email,
            createdAt: userData.createdAt || new Date().toISOString(),
            lastLogin: userData.lastLogin || new Date().toISOString()
        };

        this.data.users.push(newUser);
        this.saveData();
        return newUser;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    loadCurrentUser() {
        try {
            const userData = localStorage.getItem('currentUser');
            if (userData) {
                const storedUser = JSON.parse(userData);
                // Refresh against current user record in database if available
                if (this.data && this.data.users) {
                    const freshUser = this.data.users.find(u => u.id === storedUser.id);
                    if (freshUser) {
                        this.currentUser = freshUser;
                        localStorage.setItem('currentUser', JSON.stringify(freshUser));
                        return;
                    }
                }
                this.currentUser = storedUser;
            } else {
                this.currentUser = null;
            }
        } catch (error) {
            console.error('Error loading current user:', error);
            this.currentUser = null;
        }
    }

    getCurrentUser() {
        if (!this.currentUser) {
            this.loadCurrentUser();
        }
        return this.currentUser;
    }

    // User Management
    getUsers(role = null) {
        if (!this.data || !this.data.users) return [];
        return role ? this.data.users.filter(u => u.role === role) : this.data.users;
    }

    getUserById(id) {
        if (!this.data || !this.data.users) return null;
        return this.data.users.find(u => u.id === parseInt(id));
    }

    updateUser(userId, updates) {
        if (!this.data || !this.data.users) return false;
        const userIndex = this.data.users.findIndex(u => u.id === parseInt(userId));
        if (userIndex !== -1) {
            this.data.users[userIndex] = { ...this.data.users[userIndex], ...updates };
            if (this.currentUser && this.currentUser.id === parseInt(userId)) {
                this.currentUser = this.data.users[userIndex];
                localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            }
            this.saveData();
            return true;
        }
        return false;
    }

    deleteUser(userId) {
        if (!this.data || !this.data.users) return false;
        const uid = parseInt(userId);
        const userIndex = this.data.users.findIndex(u => u.id === uid);
        if (userIndex !== -1) {
            this.data.users.splice(userIndex, 1);
            if (this.data.classes) {
                this.data.classes.forEach(cls => {
                    if (cls.students) {
                        cls.students = cls.students.filter(studentId => studentId !== uid);
                    }
                });
            }
            if (this.currentUser && this.currentUser.id === uid) {
                this.logout();
            }
            this.saveData();
            return true;
        }
        return false;
    }

    // Class Management
    getClasses(teacherId = null, studentId = null) {
        if (!this.data || !this.data.classes) return [];
        let classes = this.data.classes;
        
        if (teacherId !== null) {
            const tid = parseInt(teacherId);
            classes = classes.filter(c => c.teacherId === tid);
        }
        
        if (studentId !== null) {
            const sid = parseInt(studentId);
            classes = classes.filter(c => c.students && c.students.includes(sid));
        }
        
        return classes;
    }

    getClassById(id) {
        if (!this.data || !this.data.classes) return null;
        return this.data.classes.find(c => c.id === parseInt(id));
    }

    addStudentToClass(classId, studentId) {
        if (!this.data || !this.data.classes) return false;
        const cid = parseInt(classId);
        const sid = parseInt(studentId);
        const classIndex = this.data.classes.findIndex(c => c.id === cid);
        if (classIndex !== -1) {
            if (!this.data.classes[classIndex].students) {
                this.data.classes[classIndex].students = [];
            }
            if (!this.data.classes[classIndex].students.includes(sid)) {
                this.data.classes[classIndex].students.push(sid);
                this.saveData();
                return true;
            }
        }
        return false;
    }

    removeStudentFromClass(classId, studentId) {
        if (!this.data || !this.data.classes) return false;
        const cid = parseInt(classId);
        const sid = parseInt(studentId);
        const classIndex = this.data.classes.findIndex(c => c.id === cid);
        if (classIndex !== -1 && this.data.classes[classIndex].students) {
            this.data.classes[classIndex].students = this.data.classes[classIndex].students.filter(id => id !== sid);
            this.saveData();
            return true;
        }
        return false;
    }

    addClass(classData) {
        if (!this.data || !this.data.classes) return false;
        const newClass = {
            id: this.generateId('classes'),
            ...classData,
            students: classData.students || [],
            createdAt: new Date().toISOString()
        };
        this.data.classes.push(newClass);
        this.saveData();
        return newClass;
    }

    updateClass(classId, updates) {
        if (!this.data || !this.data.classes) return false;
        const classIndex = this.data.classes.findIndex(c => c.id === parseInt(classId));
        if (classIndex !== -1) {
            this.data.classes[classIndex] = { ...this.data.classes[classIndex], ...updates };
            this.saveData();
            return true;
        }
        return false;
    }

    deleteClass(classId) {
        if (!this.data || !this.data.classes) return false;
        const cid = parseInt(classId);
        const classIndex = this.data.classes.findIndex(c => c.id === cid);
        if (classIndex !== -1) {
            this.data.classes.splice(classIndex, 1);
            if (this.data.assignments) {
                this.data.assignments = this.data.assignments.filter(a => a.classId !== cid);
            }
            if (this.data.practicals) {
                this.data.practicals = this.data.practicals.filter(p => p.classId !== cid);
            }
            this.saveData();
            return true;
        }
        return false;
    }

    // Assignment Management
    getAssignments(classId = null, studentId = null) {
        if (!this.data || !this.data.assignments) return [];
        let assignments = this.data.assignments;
        
        if (classId !== null) {
            const cid = parseInt(classId);
            assignments = assignments.filter(a => a.classId === cid);
        }
        
        if (studentId !== null) {
            const sid = parseInt(studentId);
            const studentClasses = this.getClasses(null, sid);
            const classIds = studentClasses.map(c => c.id);
            assignments = assignments.filter(a => classIds.includes(a.classId));
        }
        
        return assignments;
    }

    getAssignmentById(id) {
        if (!this.data || !this.data.assignments) return null;
        return this.data.assignments.find(a => a.id === parseInt(id));
    }

    createAssignment(assignmentData) {
        if (!this.data || !this.data.assignments) return null;
        const newAssignment = {
            id: this.generateId('assignments'),
            ...assignmentData,
            submissions: [],
            createdDate: new Date().toISOString().split('T')[0],
            status: assignmentData.status || 'active'
        };
        this.data.assignments.push(newAssignment);
        this.saveData();
        return newAssignment;
    }

    updateAssignment(assignmentId, updates) {
        if (!this.data || !this.data.assignments) return false;
        const index = this.data.assignments.findIndex(a => a.id === parseInt(assignmentId));
        if (index !== -1) {
            this.data.assignments[index] = { ...this.data.assignments[index], ...updates };
            this.saveData();
            return true;
        }
        return false;
    }

    submitAssignment(assignmentId, studentId, submissionData) {
        if (!this.data || !this.data.assignments) return false;
        const aid = parseInt(assignmentId);
        const sid = parseInt(studentId);
        const assignmentIndex = this.data.assignments.findIndex(a => a.id === aid);
        if (assignmentIndex !== -1) {
            if (!this.data.assignments[assignmentIndex].submissions) {
                this.data.assignments[assignmentIndex].submissions = [];
            }
            
            // Remove existing submission if any
            this.data.assignments[assignmentIndex].submissions = 
                this.data.assignments[assignmentIndex].submissions.filter(s => s.studentId !== sid);
            
            // Add new submission
            this.data.assignments[assignmentIndex].submissions.push({
                studentId: sid,
                submittedAt: new Date().toISOString(),
                ...submissionData,
                marks: null,
                feedback: null,
                gradedAt: null,
                gradedBy: null
            });
            this.saveData();
            return true;
        }
        return false;
    }

    gradeAssignment(assignmentId, studentId, marks, feedback) {
        if (!this.data || !this.data.assignments) return false;
        const aid = parseInt(assignmentId);
        const sid = parseInt(studentId);
        const assignmentIndex = this.data.assignments.findIndex(a => a.id === aid);
        if (assignmentIndex !== -1) {
            if (!this.data.assignments[assignmentIndex].submissions) {
                this.data.assignments[assignmentIndex].submissions = [];
            }
            
            const submissionIndex = this.data.assignments[assignmentIndex].submissions
                .findIndex(s => s.studentId === sid);
            
            const teacherId = this.currentUser ? this.currentUser.id : 2;

            if (submissionIndex !== -1) {
                this.data.assignments[assignmentIndex].submissions[submissionIndex].marks = marks;
                this.data.assignments[assignmentIndex].submissions[submissionIndex].feedback = feedback || 'Graded by teacher';
                this.data.assignments[assignmentIndex].submissions[submissionIndex].gradedAt = new Date().toISOString();
                this.data.assignments[assignmentIndex].submissions[submissionIndex].gradedBy = teacherId;
            } else {
                // If student hadn't submitted online, record manual grade
                this.data.assignments[assignmentIndex].submissions.push({
                    studentId: sid,
                    submittedAt: new Date().toISOString(),
                    fileUrl: null,
                    submissionNote: 'Recorded in class / offline submission',
                    marks: marks,
                    feedback: feedback || 'Graded by teacher',
                    gradedAt: new Date().toISOString(),
                    gradedBy: teacherId
                });
            }
            this.saveData();
            return true;
        }
        return false;
    }

    deleteAssignment(assignmentId) {
        if (!this.data || !this.data.assignments) return false;
        const aid = parseInt(assignmentId);
        const assignmentIndex = this.data.assignments.findIndex(a => a.id === aid);
        if (assignmentIndex !== -1) {
            this.data.assignments.splice(assignmentIndex, 1);
            this.saveData();
            return true;
        }
        return false;
    }

    // Practical Management
    getPracticals(classId = null, studentId = null) {
        if (!this.data || !this.data.practicals) return [];
        let practicals = this.data.practicals;
        
        if (classId !== null) {
            const cid = parseInt(classId);
            practicals = practicals.filter(p => p.classId === cid);
        }
        
        if (studentId !== null) {
            const sid = parseInt(studentId);
            const studentClasses = this.getClasses(null, sid);
            const classIds = studentClasses.map(c => c.id);
            practicals = practicals.filter(p => classIds.includes(p.classId));
        }
        
        return practicals;
    }

    getPracticalById(id) {
        if (!this.data || !this.data.practicals) return null;
        return this.data.practicals.find(p => p.id === parseInt(id));
    }

    createPractical(practicalData) {
        if (!this.data.practicals) {
            this.data.practicals = [];
        }

        const practical = {
            id: this.generateId('practicals'),
            ...practicalData,
            submissions: practicalData.submissions || [],
            status: practicalData.status || 'pending',
            createdAt: practicalData.createdAt || new Date().toISOString()
        };

        this.data.practicals.push(practical);
        this.saveData();
        return practical;
    }

    updatePractical(practicalId, updates) {
        if (!this.data || !this.data.practicals) return false;
        const index = this.data.practicals.findIndex(p => p.id === parseInt(practicalId));
        if (index !== -1) {
            this.data.practicals[index] = { ...this.data.practicals[index], ...updates };
            this.saveData();
            return true;
        }
        return false;
    }

    submitPractical(practicalId, studentId, submissionData) {
        if (!this.data || !this.data.practicals) return false;
        const pid = parseInt(practicalId);
        const sid = parseInt(studentId);
        const practicalIndex = this.data.practicals.findIndex(p => p.id === pid);
        if (practicalIndex !== -1) {
            if (!this.data.practicals[practicalIndex].submissions) {
                this.data.practicals[practicalIndex].submissions = [];
            }
            
            this.data.practicals[practicalIndex].submissions = 
                this.data.practicals[practicalIndex].submissions.filter(s => s.studentId !== sid);
            
            this.data.practicals[practicalIndex].submissions.push({
                studentId: sid,
                submittedAt: new Date().toISOString(),
                ...submissionData,
                marks: null,
                feedback: null,
                gradedAt: null,
                gradedBy: null
            });
            this.saveData();
            return true;
        }
        return false;
    }

    gradePractical(practicalId, studentId, marks, feedback) {
        if (!this.data || !this.data.practicals) return false;
        const pid = parseInt(practicalId);
        const sid = parseInt(studentId);
        const practicalIndex = this.data.practicals.findIndex(p => p.id === pid);
        if (practicalIndex !== -1) {
            if (!this.data.practicals[practicalIndex].submissions) {
                this.data.practicals[practicalIndex].submissions = [];
            }

            const submissionIndex = this.data.practicals[practicalIndex].submissions
                .findIndex(s => s.studentId === sid);
            
            const teacherId = this.currentUser ? this.currentUser.id : 2;

            if (submissionIndex !== -1) {
                this.data.practicals[practicalIndex].submissions[submissionIndex].marks = marks;
                this.data.practicals[practicalIndex].submissions[submissionIndex].feedback = feedback || 'Graded by teacher';
                this.data.practicals[practicalIndex].submissions[submissionIndex].gradedAt = new Date().toISOString();
                this.data.practicals[practicalIndex].submissions[submissionIndex].gradedBy = teacherId;
            } else {
                this.data.practicals[practicalIndex].submissions.push({
                    studentId: sid,
                    submittedAt: new Date().toISOString(),
                    fileUrl: null,
                    submissionNote: 'Recorded in lab / offline submission',
                    marks: marks,
                    feedback: feedback || 'Graded by teacher',
                    gradedAt: new Date().toISOString(),
                    gradedBy: teacherId
                });
            }
            this.saveData();
            return true;
        }
        return false;
    }

    deletePractical(practicalId) {
        if (!this.data || !this.data.practicals) return false;
        const pid = parseInt(practicalId);
        const practicalIndex = this.data.practicals.findIndex(p => p.id === pid);
        if (practicalIndex !== -1) {
            this.data.practicals.splice(practicalIndex, 1);
            this.saveData();
            return true;
        }
        return false;
    }

    // Attendance Management
    getAttendance(classId = null, studentId = null, date = null) {
        if (!this.data || !this.data.attendance) return [];
        let attendance = this.data.attendance;
        
        if (classId !== null && classId !== 'all') {
            const cid = parseInt(classId);
            attendance = attendance.filter(a => a.classId === cid);
        }
        
        if (date) {
            attendance = attendance.filter(a => a.date === date);
        }
        
        if (studentId !== null) {
            const sid = parseInt(studentId);
            attendance = attendance.filter(a => 
                a.records && a.records.some(r => r.studentId === sid)
            );
        }
        
        return attendance;
    }

    markAttendance(classId, date, records) {
        if (!this.data || !this.data.attendance) return false;
        const cid = parseInt(classId);
        
        // Remove existing attendance for the same class and date
        this.data.attendance = this.data.attendance.filter(a => 
            !(a.classId === cid && a.date === date)
        );
        
        const teacherId = this.currentUser ? this.currentUser.id : 2;

        const newAttendance = {
            id: this.generateId('attendance'),
            classId: cid,
            date: date,
            records: records,
            markedBy: teacherId,
            markedAt: new Date().toISOString()
        };
        
        this.data.attendance.push(newAttendance);
        this.saveData();
        return true;
    }

    getStudentAttendanceStats(studentId) {
        if (!this.data || !this.data.attendance) return { total: 0, present: 0, absent: 0, percentage: 0 };
        const sid = parseInt(studentId);
        
        let total = 0, present = 0;
        
        this.data.attendance.forEach(att => {
            const studentRecord = att.records.find(r => r.studentId === sid);
            if (studentRecord) {
                total++;
                if (studentRecord.status === 'present') {
                    present++;
                }
            }
        });
        
        const absent = total - present;
        const percentage = total > 0 ? Math.round((present / total) * 100) : 0;
        
        return { total, present, absent, percentage };
    }

    // Grades Management
    getGrades(studentId = null, classId = null) {
        if (!this.data || !this.data.grades) return [];
        let grades = this.data.grades;
        
        if (studentId !== null) {
            const sid = parseInt(studentId);
            grades = grades.filter(g => g.studentId === sid);
        }
        
        if (classId !== null && classId !== 'all') {
            const cid = parseInt(classId);
            grades = grades.filter(g => g.classId === cid);
        }
        
        return grades;
    }

    // Notification Management
    getNotifications(userId = null) {
        if (!this.data || !this.data.notifications) return [];
        if (userId !== null) {
            const uid = parseInt(userId);
            return this.data.notifications.filter(n => n.userId === uid);
        }
        return this.data.notifications;
    }

    createNotification(userId, title, message, type = 'info') {
        if (!this.data || !this.data.notifications) return false;
        const notification = {
            id: this.generateId('notifications'),
            userId: parseInt(userId),
            title,
            message,
            type,
            read: false,
            createdAt: new Date().toISOString()
        };
        this.data.notifications.push(notification);
        this.saveData();
        return notification;
    }

    markNotificationAsRead(notificationId) {
        if (!this.data || !this.data.notifications) return false;
        const nid = parseInt(notificationId);
        const notificationIndex = this.data.notifications.findIndex(n => n.id === nid);
        if (notificationIndex !== -1) {
            this.data.notifications[notificationIndex].read = true;
            this.saveData();
            return true;
        }
        return false;
    }

    // Utility Methods
    generateId(collection) {
        if (!this.data || !this.data[collection] || this.data[collection].length === 0) return 1;
        const maxId = Math.max(...this.data[collection].map(item => item.id || 0));
        return maxId + 1;
    }

    getSettings() {
        return this.data ? this.data.settings : {};
    }

    updateSettings(newSettings) {
        if (this.data) {
            this.data.settings = { ...this.data.settings, ...newSettings };
            this.saveData();
            return true;
        }
        return false;
    }
}

// Create global instance immediately
window.db = new DatabaseManager();

// Initialize database from data.json if available
async function initializeDatabase() {
    try {
        await window.db.loadData();
    } catch (error) {
        console.warn('Initial loadData notice:', error);
    }
}

// Initialize immediately
initializeDatabase();
