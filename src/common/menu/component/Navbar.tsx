'use client';

import React, { useState, ReactElement, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    MagnifyingGlassIcon,
    ClockIcon,
    BuildingOffice2Icon,
    QuestionMarkCircleIcon,
    UsersIcon,
    BriefcaseIcon,
    DocumentTextIcon,
    Cog6ToothIcon,
    ChartBarIcon,
    StarIcon,
    SparklesIcon,
    UserGroupIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    BuildingOfficeIcon,
    SunIcon,
    GlobeAltIcon,
    HomeIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const iconMap: Record<string, ReactElement | undefined> = {
    'Company Search': <MagnifyingGlassIcon className="w-4 h-4" />,
    'Companies': <BuildingOfficeIcon className="w-4 h-4" />,
    'Contract Draft': <ClockIcon className="w-4 h-4" />,
    'Contract Approved': <BuildingOffice2Icon className="w-4 h-4" />,
    'Contract Rejected': <QuestionMarkCircleIcon className="w-4 h-4" />,
    'Contract Signed': <UsersIcon className="w-4 h-4" />,
    'Contract Register': <BriefcaseIcon className="w-4 h-4" />,
    'Contract Editor': <ChartBarIcon className="w-4 h-4" />,
    'Payment': <SparklesIcon className="w-4 h-4" />,
    'Payslip': <UserGroupIcon className="w-4 h-4" />,
    'MyPage': <UserCircleIcon className="w-4 h-4" />,
    'Logout': <ArrowRightOnRectangleIcon className="w-4 h-4" />,
    'Farms': <SunIcon className="w-4 h-4" />,
    'Invoice': <GlobeAltIcon className="w-4 h-4" />,
    'Payroll': <StarIcon className="w-4 h-4" />,
    'Workers': <UserGroupIcon className="w-4 h-4" />,
};

// 역할별 네비게이션 아이템 정의
const ROLE_NAVIGATION = {
    worker: [
        { id: '01', title: '1차', href: '/first' },
        { id: '02', title: '2차', href: '/secnd' },
    ],
    executive: [
        { id: '01', title: 'Companies', href: '/company/overview' },
        { id: '02', title: 'Contract Register', href: '/personal/register' },
        { id: '03', title: 'Contract Draft', href: '/draft/overview' },
        { id: '04', title: 'Contract Approved', href: '/approved/overview' },
        { id: '05', title: 'Contract Rejected', href: '/rejected/overview' },
        { id: '06', title: 'Contract Signed', href: '/signed/overview' },
        { id: '07', title: 'Contract Editor', href: '/personal/editor' },
        { id: '15', title: 'Workers', href: '/worker/overview' },
        { id: '08', title: 'Farms', href: '/farm/overview' },
        { id: '09', title: 'Payment', href: '/payment/overview' },
        { id: '10', title: 'Payslip', href: '/payslip/overview' },
        { id: '11', title: 'Payroll', href: '/payroll/overview' },
        { id: '14', title: 'Logout', href: '/' },
    ],
    manager: [
        { id: '01', title: 'Companies', href: '/company/overview' },
        { id: '02', title: 'Contract Register', href: '/personal/register' },
        { id: '03', title: 'Contract Draft', href: '/draft/overview' },
        { id: '04', title: 'Contract Approved', href: '/approved/overview' },
        { id: '05', title: 'Contract Rejected', href: '/rejected/overview' },
        { id: '06', title: 'Contract Signed', href: '/signed/overview' },
        { id: '07', title: 'Contract Editor', href: '/personal/editor' },
        { id: '15', title: 'Workers', href: '/worker/overview' },
        { id: '08', title: 'Farms', href: '/farm/overview' },
        { id: '09', title: 'Payment', href: '/payment/overview' },
        { id: '10', title: 'Payslip', href: '/payslip/overview' },
        { id: '11', title: 'Payroll', href: '/payroll/overview' },
        { id: '14', title: 'Logout', href: '/' },
    ],
    supervisor: [
        { id: '01', title: 'Companies', href: '/company/overview' },
        { id: '02', title: 'Contract Register', href: '/personal/register' },
        { id: '03', title: 'Contract Draft', href: '/draft/overview' },
        { id: '04', title: 'Contract Approved', href: '/approved/overview' },
        { id: '05', title: 'Contract Rejected', href: '/rejected/overview' },
        { id: '06', title: 'Contract Signed', href: '/signed/overview' },
        { id: '07', title: 'Contract Editor', href: '/personal/editor' },
        { id: '15', title: 'Workers', href: '/worker/overview' },
        { id: '08', title: 'Farms', href: '/farm/overview' },
        { id: '09', title: 'Payment', href: '/payment/overview' },
        { id: '10', title: 'Payslip', href: '/payslip/overview' },
        { id: '11', title: 'Payroll', href: '/payroll/overview' },
        { id: '14', title: 'Logout', href: '/' },
    ],
    default: [
        { id: '01', title: '1차', href: '/first' },
        { id: '02', title: '2차', href: '/secnd' },
       
    ]
};
// ...
interface NavItem {
    id: string;
    title: string;
    href: string;
}

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    // 상태 관리
    const [currentRole, setCurrentRole] = useState<string>('worker');
    const [navItems, setNavItems] = useState<NavItem[]>(ROLE_NAVIGATION.default);
    const [isClient, setIsClient] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showContractDropdown, setShowContractDropdown] = useState(false);
    const [showMobileContract, setShowMobileContract] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // 클라이언트 사이드에서만 실행되도록 보장
    useEffect(() => {
        setIsClient(true);
    }, []);

    // 역할 변경 감지 및 네비게이션 업데이트
    useEffect(() => {
        if (!isClient) return;

        const updateNavigation = () => {
            const role = localStorage.getItem('role') || 'worker';
            console.log('🔍 현재 localStorage role:', role);

            setCurrentRole(role);

            // 역할에 따른 네비게이션 아이템 설정
            const items = ROLE_NAVIGATION[role as keyof typeof ROLE_NAVIGATION] || ROLE_NAVIGATION.default;
            setNavItems(items);

            console.log('✅ 네비게이션 업데이트 완료:', role, items.length, '개 아이템');
        };

        // 초기 네비게이션 설정
        updateNavigation();

        // localStorage 변경 감지
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'role') {
                console.log('🔄 localStorage role 변경 감지:', e.newValue);
                updateNavigation();
            }
        };

        // 수동으로 localStorage 변경을 감지하기 위한 polling
        const interval = setInterval(updateNavigation, 1000);

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, [isClient]);

    const isContractRegisterActive = [
        '/personal/register',
        '/policy/register',
        '/agreement/register',
        '/schedule/register',
        '/guideline/register',
        '/survey/register'
    ].some(path => pathname.startsWith(path));

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        console.log('🚪 로그아웃 처리');
        localStorage.clear();
        sessionStorage.clear();
        setCurrentRole('worker');
        setNavItems(ROLE_NAVIGATION.default);
        router.push('/');
    };

    // 클라이언트 사이드에서만 렌더링
    if (!isClient) {
        return (
            <div className="fixed top-0 left-0 w-full bg-blue-900 z-30 py-4 px-6">
                <nav className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="text-white font-bold text-lg flex items-center gap-2">
                        <HomeIcon className="w-5 h-5" />
                        Home
                    </div>
                    <div className="text-white text-sm">Loading...</div>
                </nav>
            </div>
        );
    }

    return (
        <div className="fixed top-0 left-0 w-full bg-blue-900 z-30 py-4 px-6">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="text-white font-bold text-lg flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
                    <HomeIcon className="w-5 h-5" />
                    Home
                </div>

                <div className="flex items-center gap-4">
                    {/* 모바일 메뉴 버튼 */}
                    <button
                        className="md:hidden text-white"
                        onClick={toggleMobileMenu}
                        aria-label="메뉴 열기"
                    >
                        <svg className={`w-8 h-8 ${isMobileMenuOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg className={`w-8 h-8 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* 데스크톱 메뉴 */}
                    <ul className="hidden md:flex space-x-4">
                        {/* Contract 관련이 아닌 메뉴들 */}
                        {navItems.filter(item => !['Contract Register', 'Contract Draft', 'Contract Approved', 'Contract Rejected', 'Contract Signed', 'Contract Editor', 'Logout'].includes(item.title)).map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="cursor-pointer transition-all duration-300 hover:text-blue-300 hover:scale-105 group flex-shrink-0"
                                >
                                    <li className="flex flex-col items-center min-w-[80px] cursor-pointer">
                                        <div className="flex items-center gap-1 mt-1 cursor-pointer">
                                            <span className={`${isActive ? 'text-blue-300' : 'text-white'} cursor-pointer`}>{iconMap[item.title]}</span>
                                            <span className={`text-xs text-center ${isActive ? 'text-blue-300' : 'text-white'} cursor-pointer`}>{item.title}</span>
                                        </div>
                                    </li>
                                </Link>
                            );
                        })}

                        {/* Contract 드롭다운 */}
                        {navItems.some(item => ['Contract Register', 'Contract Draft', 'Contract Approved', 'Contract Rejected', 'Contract Signed', 'Contract Editor'].includes(item.title)) && (
                            <li className="relative min-w-[100px]">
                                <button
                                    className="flex items-center gap-1 text-white hover:text-blue-300 text-xs font-medium px-2 py-1 rounded focus:outline-none"
                                    type="button"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setShowContractDropdown(v => !v);
                                    }}
                                >
                                    <BriefcaseIcon className="w-4 h-4" />
                                    Contract
                                    <ChevronDownIcon className="w-4 h-4" />
                                </button>
                                {showContractDropdown && (
                                    <ul className="absolute left-0 mt-1 w-40 bg-white rounded-lg shadow-lg py-2" style={{ zIndex: 1001 }}>
                                        {navItems.filter(item => ['Contract Register', 'Contract Draft', 'Contract Approved', 'Contract Rejected', 'Contract Signed', 'Contract Editor'].includes(item.title)).map((item) => (
                                            <Link key={item.id} href={item.href}>
                                                <li className="px-4 py-2 hover:bg-blue-50 text-gray-700 cursor-pointer text-sm flex items-center gap-2">
                                                    {iconMap[item.title]}
                                                    <span>{item.title.replace('Contract ', '')}</span>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )}
                    </ul>

                    {/* 프로필 드롭다운 */}
                    <div className="flex-shrink-0 relative">
                        <button
                            onClick={() => setShowProfileMenu(v => !v)}
                            className="flex items-center text-white"
                        >
                            <Image
                                className="h-8 w-8 rounded-full"
                                src="/user-profile.jpg"
                                alt="사용자 프로필"
                                width={32}
                                height={32}
                            />
                        </button>
                        {showProfileMenu && (
                            <ul className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-4 z-50">
                                <li className="flex items-center gap-3 px-6 py-2 cursor-pointer hover:bg-blue-50 text-gray-700">
                                    <span className="font-bold">현재 역할: {currentRole}</span>
                                </li>
                                <li className="flex items-center gap-3 px-6 py-2 cursor-pointer hover:bg-blue-50 text-gray-700">
                                    <span>My Profile</span>
                                </li>
                                <li className="flex items-center gap-3 px-6 py-2 cursor-pointer hover:bg-blue-50 text-gray-700">
                                    <span>Edit Profile</span>
                                </li>
                                <li
                                    className="flex items-center gap-3 px-6 py-2 cursor-pointer hover:bg-blue-50 text-gray-700"
                                    onClick={() => {
                                        setShowProfileMenu(false);
                                        router.push('/admin-auth');
                                    }}
                                >
                                    <span>Administrator</span>
                                </li>
                                <li
                                    className="flex items-center gap-3 px-6 py-2 cursor-pointer hover:bg-red-50 text-red-600"
                                    onClick={() => {
                                        setShowProfileMenu(false);
                                        handleLogout();
                                    }}
                                >
                                    <span>Logout</span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>

            {/* 모바일 메뉴 */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-900 w-full mt-2 rounded shadow-lg py-4 px-2 max-h-[80vh] overflow-y-auto">
                    <ul className="flex flex-col space-y-2">
                        {navItems.filter(item => item.title !== 'Logout').map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <li className="flex items-center gap-3 p-2 cursor-pointer hover:bg-blue-800 rounded">
                                        <span className={`${isActive ? 'text-blue-300' : 'text-white'}`}>{iconMap[item.title]}</span>
                                        <span className={`text-sm ${isActive ? 'text-blue-300' : 'text-white'}`}>{item.title}</span>
                                    </li>
                                </Link>
                            );
                        })}
                        <li
                            className="flex items-center gap-3 p-2 text-red-400 cursor-pointer hover:bg-red-900 rounded"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                handleLogout();
                            }}
                        >
                            <ArrowRightOnRectangleIcon className="w-4 h-4" />
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}